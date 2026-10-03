import { site, path, absolute } from './config.mjs';
import { strings } from './i18n.mjs';
import { apps } from './apps/index.mjs';

export function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const ICON_SUN =
  '<svg class="i-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5"/><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"/></svg>';
const ICON_MOON =
  '<svg class="i-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z"/></svg>';

function logo() {
  return `<span class="logo-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><rect width="32" height="32" rx="8"/><text x="16" y="21.5" text-anchor="middle">SH</text></svg></span><span class="logo-text">SHneo<span>Designs</span></span>`;
}

/**
 * Wraps page content in the shared document shell.
 * @param {object} p
 * @param {string} p.lang          language code
 * @param {string} p.route         route without language prefix, e.g. '/apps/'
 * @param {string} p.title
 * @param {string} p.description
 * @param {string} p.body          main HTML
 * @param {boolean} [p.noindex]    exclude from search engines (drafts, 404)
 * @param {string} [p.ogType]
 * @param {boolean} [p.standalone] no canonical/alternates (404 page)
 */
export function layout({ lang, route, title, description, body, noindex = false, ogType = 'website', standalone = false }) {
  const t = strings[lang];
  const lang0 = site.languages.find((l) => l.code === lang);
  const canonical = absolute(lang, route);
  const alternates = standalone
    ? ''
    : site.languages
        .map((l) => `<link rel="alternate" hreflang="${l.code}" href="${absolute(l.code, route)}">`)
        .join('\n    ') +
      `\n    <link rel="alternate" hreflang="x-default" href="${absolute(site.languages[0].code, route)}">`;
  const switcher = site.languages
    .map((l) =>
      l.code === lang
        ? `<span class="lang-current" aria-current="true" lang="${l.code}" title="${esc(l.label)}">${l.short}</span>`
        : `<a href="${path(l.code, standalone ? '/' : route)}" hreflang="${l.code}" lang="${l.code}" title="${esc(l.label)}">${l.short}</a>`,
    )
    .join('');

  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self'; style-src 'self'; script-src 'self'; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'self'; form-action 'none'">
    <meta name="referrer" content="strict-origin-when-cross-origin">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    ${noindex ? '<meta name="robots" content="noindex, follow">' : ''}
    ${standalone ? '' : `<link rel="canonical" href="${canonical}">\n    ${alternates}`}
    <meta property="og:site_name" content="${site.brand}">
    <meta property="og:type" content="${ogType}">
    <meta property="og:title" content="${esc(title)}">
    <meta property="og:description" content="${esc(description)}">
    ${standalone ? '' : `<meta property="og:url" content="${canonical}">`}
    <meta property="og:locale" content="${lang0.locale}">
    <meta property="og:image" content="${site.origin}/assets/og.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="color-scheme" content="light dark">
    <meta name="theme-color" content="#f6f8fb" media="(prefers-color-scheme: light)">
    <meta name="theme-color" content="#0c1118" media="(prefers-color-scheme: dark)">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="stylesheet" href="/assets/site.css">
    <script src="/assets/theme.js"></script>
  </head>
  <body>
    <a class="skip" href="#main">${t.skip}</a>
    <header class="site-header">
      <div class="wrap header-row">
        <a class="logo" href="${path(lang, '/')}" aria-label="${site.brand} – ${t.navHome}">${logo()}</a>
        <nav class="nav" aria-label="${lang === 'de' ? 'Hauptnavigation' : 'Main navigation'}">
          <a href="${path(lang, '/apps/')}"${route.startsWith('/apps/') ? ' aria-current="page"' : ''}>${t.navApps}</a>
          <a href="${path(lang, '/support/')}"${route === '/support/' ? ' aria-current="page"' : ''}>${t.navSupport}</a>
        </nav>
        <div class="tools">
          <div class="lang" role="group" aria-label="${t.language}">${switcher}</div>
          <button class="theme-toggle" type="button" hidden data-label-light="${t.themeLight}" data-label-dark="${t.themeDark}" aria-label="${t.themeToggle}" title="${t.themeToggle}">${ICON_SUN}${ICON_MOON}</button>
        </div>
      </div>
    </header>
    <main id="main" tabindex="-1">
${body}
    </main>
    <footer class="site-footer">
      <div class="wrap footer-grid">
        <div>
          <a class="logo logo-footer" href="${path(lang, '/')}">${logo()}</a>
          <p class="muted">${t.footerTagline}</p>
        </div>
        <nav aria-label="${t.footerApps}">
          <h2 class="footer-h">${t.footerApps}</h2>
          <ul>
            <li><a href="${path(lang, '/apps/')}">${t.allApps}</a></li>
            ${apps.map((a) => `<li><a href="${path(lang, `/apps/${a.slug}/`)}">${esc(a.name)}</a></li>`).join('\n            ')}
          </ul>
        </nav>
        <nav aria-label="${t.footerLegal}">
          <h2 class="footer-h">${t.footerLegal}</h2>
          <ul>
            <li><a href="${path(lang, '/legal/imprint/')}">${t.footerImprint}</a></li>
            <li><a href="${path(lang, '/legal/privacy/')}">${t.footerPrivacy}</a></li>
          </ul>
        </nav>
        <div>
          <h2 class="footer-h">${t.footerContact}</h2>
          <ul>
            <li><a href="${path(lang, '/support/')}">${t.navSupport}</a></li>
            <li><a href="mailto:${site.supportEmail}">${site.supportEmail}</a></li>
          </ul>
        </div>
      </div>
      <div class="wrap footer-base muted">© ${new Date().getUTCFullYear()} ${site.brand}</div>
    </footer>
    <script src="/assets/site.js" defer></script>
  </body>
</html>
`;
}
