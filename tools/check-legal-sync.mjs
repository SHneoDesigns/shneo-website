// Verifies that the legal texts published here are identical (line endings
// normalised) to the texts bundled in the apps. Run locally next to the
// SHneoTools repository:
//   node tools/check-legal-sync.mjs [path to SHneoTools]   (default C:/dev/SHneoTools)
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const site = join(dirname(fileURLToPath(import.meta.url)), '..', 'content', 'legal');
const tools = process.argv[2] || 'C:/dev/SHneoTools';
const pairs = [];
for (const lang of ['de', 'en']) {
  for (const name of ['privacy_policy', 'terms']) {
    pairs.push([`apps/shneo_lastdone/assets/legal/${name}.${lang}.txt`, `lastdone/${name}.${lang}.txt`]);
    pairs.push([`apps/shneo_shiftcheck/assets/legal/${name}.${lang}.txt`, `shiftcheck/${name}.${lang}.txt`]);
    pairs.push([`apps/shneo_toolnest/assets/legal/${name}.${lang}.txt`, `toolnest/${name}.${lang}.txt`]);
  }
  pairs.push([`apps/shneo_lastdone/assets/legal/imprint.${lang}.txt`, `site/imprint.${lang}.txt`]);
  pairs.push([`apps/shneo_shiftcheck/assets/legal/imprint.${lang}.txt`, `site/imprint.${lang}.txt`]);
  pairs.push([`apps/shneo_toolnest/assets/legal/imprint.${lang}.txt`, `site/imprint.${lang}.txt`]);
}

if (!existsSync(tools)) {
  console.error(`SHneoTools not found at ${tools}`);
  process.exit(2);
}
const norm = (file) => readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
let failed = 0;
for (const [app, web] of pairs) {
  const same = norm(join(tools, app)) === norm(join(site, web));
  console.log(`${same ? 'same     ' : 'DIFFERENT'} ${web}`);
  if (!same) failed++;
}
process.exit(failed ? 1 : 0);
