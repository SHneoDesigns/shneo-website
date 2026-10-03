# shneo.app – SHneoDesigns / SHneoTools website

Static website of SHneoDesigns and the SHneoTools app portfolio, served
with GitHub Pages at <https://shneo.app>.

- No server, no database, no accounts, no cookies, no analytics, no
  third-party scripts or fonts. Everything is served from `shneo.app`.
- Plain Node.js build without dependencies (Node ≥ 20).
- German (default, no prefix) and English (`/en/`); more languages = one
  more entry in `src/config.mjs` plus strings in `src/i18n.mjs` and in each
  app file.

## Commands

```bash
npm run build   # src/ + static/ -> _site/
npm run check   # links, external requests, legacy references, meta tags
npm test        # build + check (also run by the deploy workflow)
npm run serve   # preview _site/ on http://localhost:4173
```

Pushing to `main` builds, checks and deploys via
`.github/workflows/pages.yml`.

## Structure

```
src/config.mjs        site + confirmed company data, languages, URL helpers
src/i18n.mjs          interface strings per language
src/apps/index.mjs    app registry (order = order on the site)
src/apps/<app>.mjs    one file per app: metadata + texts per language
src/layout.mjs        shared document shell (head, header, footer)
src/pages.mjs         page builders
static/               files copied as they are (CSS, JS, icons, CNAME)
tools/                check, local server, image generator
```

Generated routes per language (`/en` prefix for English):

```
/                        home
/apps/                   app overview (from the registry)
/apps/<app>/             product page
/apps/<app>/privacy/     app privacy policy
/apps/<app>/terms/       app terms of use
/apps/<app>/support/     app support
/legal/imprint/          imprint (Impressum)
/legal/privacy/          privacy policy of the website itself
/support/                central support
/404.html
```

## Adding an app

1. Copy `src/apps/lastdone.mjs` to `src/apps/<slug>.mjs` and fill in the
   facts (only confirmed facts; no store link before publication).
2. Add the icon to `static/assets/apps/<slug>/icon.png` (square, ≥ 192 px).
3. Import it in `src/apps/index.mjs`.
4. `npm test`, commit, push.

## Legal texts

`legal.privacy` / `legal.terms` in an app file and the website privacy page
are `draft` until the binding texts are supplied. Draft pages show an
"in preparation" notice, carry `noindex` and are left out of the sitemap.
