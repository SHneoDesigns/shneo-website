// Quality gate for _site/: run after the build (npm run check).
// - every internal link/asset resolves to a file
// - no external resource is loaded (only links to mailto:/tel:/https pages)
// - no legacy brand/backend references, no secrets
// - every page has lang, title, description; indexable pages a canonical
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const out = join(dirname(fileURLToPath(import.meta.url)), '..', '_site');
const files = (await readdir(out, { recursive: true })).map((f) => f.replaceAll('\\', '/'));
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const textFiles = files.filter((f) => /\.(html|css|js|xml|txt|svg)$/.test(f) || f === 'CNAME');
const problems = [];

const forbidden = [
  /nexara/i,
  /shneo[.\-_ ]?ai\b/i,
  /firebase/i,
  /didit/i,
  /braineater/i,
  /web\.app/i,
  /googletagmanager|google-analytics|gtag\(|fbq\(|fonts\.googleapis|fonts\.gstatic|cdn\./i,
  /AIza[0-9A-Za-z_-]{20,}/,
  /(api[_-]?key|secret|token|password)\s*[:=]/i,
];

for (const f of textFiles) {
  const s = await readFile(join(out, f), 'utf8');
  for (const re of forbidden) if (re.test(s)) problems.push(`${f}: forbidden pattern ${re}`);
}

function resolve(from, href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean) return null;
  const abs = clean.startsWith('/') ? clean : '/' + join(dirname(from), clean).replaceAll('\\', '/');
  const candidates = abs.endsWith('/') ? [abs + 'index.html'] : [abs, abs + '/index.html'];
  return candidates.some((c) => existsSync(join(out, c))) ? null : abs;
}

for (const f of htmlFiles) {
  const s = await readFile(join(out, f), 'utf8');
  if (!/<html lang="(de|en)">/.test(s)) problems.push(`${f}: missing html lang`);
  if (!/<title>[^<]{10,}<\/title>/.test(s)) problems.push(`${f}: missing title`);
  if (!/<meta name="description" content="[^"]{20,}">/.test(s)) problems.push(`${f}: missing description`);
  const noindex = s.includes('noindex');
  if (!noindex && !/<link rel="canonical" href="https:\/\/shneo\.app\//.test(s)) problems.push(`${f}: missing canonical`);
  if ((s.match(/<h1[ >]/g) || []).length !== 1) problems.push(`${f}: needs exactly one h1`);

  for (const m of s.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const url = m[1];
    if (/^(mailto:|tel:)/.test(url)) continue;
    if (/^https?:\/\//.test(url)) {
      const isOwn = url.startsWith('https://shneo.app/');
      const tag = s.slice(s.lastIndexOf('<', m.index), m.index);
      // External URLs may only be plain navigational links (<a>) or the own
      // canonical/alternate links – never loaded resources.
      if (!isOwn && !tag.startsWith('<a')) problems.push(`${f}: external resource ${url}`);
      if (url.startsWith('http://')) problems.push(`${f}: insecure link ${url}`);
      continue;
    }
    const missing = resolve(f, url);
    if (missing) problems.push(`${f}: broken link ${url}`);
  }
  for (const m of s.matchAll(/<img [^>]*>/g)) if (!/ alt="/.test(m[0])) problems.push(`${f}: img without alt`);
}

const sitemap = await readFile(join(out, 'sitemap.xml'), 'utf8');
for (const m of sitemap.matchAll(/<loc>https:\/\/shneo\.app([^<]+)<\/loc>/g)) {
  if (resolve('index.html', m[1])) problems.push(`sitemap: missing page ${m[1]}`);
}

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} problem(s)`);
  process.exit(1);
}
console.log(`check ok: ${htmlFiles.length} pages, ${textFiles.length} text files, no external resources, no legacy references`);
