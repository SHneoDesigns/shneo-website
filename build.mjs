// Static site build without dependencies: node build.mjs -> _site/
import { mkdir, rm, writeFile, cp, readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { site, path, absolute } from './src/config.mjs';
import { apps } from './src/apps/index.mjs';
import { layout } from './src/layout.mjs';
import * as pages from './src/pages.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, '_site');

async function emit(route, html) {
  const file = route.endsWith('.html') ? join(out, route) : join(out, route, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(join(root, 'static'), out, { recursive: true });

const indexable = new Set();
for (const { code: lang } of site.languages) {
  const list = [
    pages.home(lang),
    pages.appsIndex(lang),
    pages.support(lang),
    pages.imprint(lang),
    pages.sitePrivacy(lang),
    ...apps.flatMap((app) => [
      pages.appPage(app, lang),
      pages.appPrivacy(app, lang),
      pages.appTerms(app, lang),
      pages.appSupport(app, lang),
    ]),
  ];
  for (const page of list) {
    await emit(path(lang, page.route), layout({ lang, ...page }));
    if (!page.noindex) indexable.add(page.route);
  }
}

const nf = pages.notFound();
await emit(nf.route, layout({ lang: 'de', ...nf }));

// sitemap.xml with language alternates; drafts (noindex) are left out.
const urls = [...indexable]
  .flatMap((route) =>
    site.languages.map(
      (l) => `  <url>
    <loc>${absolute(l.code, route)}</loc>
${site.languages.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.code}" href="${absolute(a.code, route)}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(site.languages[0].code, route)}"/>
  </url>`,
    ),
  )
  .join('\n');
await writeFile(
  join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
);
await writeFile(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`);

const count = (await readdir(out, { recursive: true })).filter((f) => f.endsWith('.html')).length;
console.log(`built ${count} pages, ${indexable.size * site.languages.length} in sitemap -> _site/`);
