// Legal texts are plain text files in content/legal/ (the same simple format
// the apps bundle: "# " title, "## " heading, "- " bullet, other lines are
// paragraphs; consecutive lines keep their line break). The LastDone texts
// are byte-identical copies of the app's assets/legal/*.txt.
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { esc } from './layout.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'content', 'legal');

/** Path of a legal text, e.g. legalFile('site', 'privacy', 'de'). */
export function legalFile(group, name, lang) {
  return join(root, group, `${name}.${lang}.txt`);
}

export function hasLegalText(group, name, lang) {
  return existsSync(legalFile(group, name, lang));
}

function inline(text) {
  return esc(text)
    .replace(/https:\/\/[^\s<]+[^\s<.,;:)]/g, (url) => `<a href="${url}">${url}</a>`)
    .replace(/\b[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}\b/gi, (mail) => `<a href="mailto:${mail}">${mail}</a>`);
}

/** Renders a legal text; returns { title, html } (title = the "# " line). */
export function renderLegal(group, name, lang) {
  const source = readFileSync(legalFile(group, name, lang), 'utf8').replace(/\r\n/g, '\n');
  let title = '';
  const out = [];
  let paragraph = [];
  let list = [];
  const flushParagraph = () => {
    if (paragraph.length) out.push(`<p>${paragraph.map(inline).join('<br>')}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (list.length) out.push(`<ul>${list.map((item) => `<li>${inline(item)}</li>`).join('')}</ul>`);
    list = [];
  };
  for (const raw of source.split('\n')) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushParagraph();
      flushList();
    } else if (line.startsWith('## ')) {
      flushParagraph();
      flushList();
      out.push(`<h2>${inline(line.slice(3))}</h2>`);
    } else if (line.startsWith('# ')) {
      flushParagraph();
      flushList();
      title = line.slice(2);
    } else if (line.startsWith('- ')) {
      flushParagraph();
      list.push(line.slice(2));
    } else {
      flushList();
      paragraph.push(line);
    }
  }
  flushParagraph();
  flushList();
  return { title, html: out.join('\n        ') };
}
