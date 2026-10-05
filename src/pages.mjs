// Page builders. Each returns { route, title, description, body, noindex? }
// for one language; build.mjs renders every page in every language.

import { site, path } from './config.mjs';
import { strings } from './i18n.mjs';
import { apps } from './apps/index.mjs';
import { esc } from './layout.mjs';
import { renderLegal, hasLegalText } from './legal.mjs';

const ARROW = '<svg class="i-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const CHECK = '<svg class="i-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const MAIL = '<svg class="i-mail" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5 12 13l8.5-6.5"/></svg>';

function crumbs(lang, items) {
  const t = strings[lang];
  const all = [{ label: t.navHome, route: '/' }, ...items];
  return `<nav class="crumbs" aria-label="${t.breadcrumb}"><ol>${all
    .map((c, i) =>
      i === all.length - 1
        ? `<li aria-current="page">${esc(c.label)}</li>`
        : `<li><a href="${path(lang, c.route)}">${esc(c.label)}</a></li>`,
    )
    .join('')}</ol></nav>`;
}

function statusBadge(app, lang) {
  return `<span class="badge badge-${app.status}">${esc(app.content[lang].statusLabel)}</span>`;
}

function appCard(app, lang) {
  const t = strings[lang];
  const c = app.content[lang];
  return `<article class="app-card">
          <a class="app-card-link" href="${path(lang, `/apps/${app.slug}/`)}">
            <img class="app-icon" src="${app.icon}" alt="" width="72" height="72" loading="lazy">
            <div class="app-card-body">
              <div class="app-card-head"><h3>${esc(app.name)}</h3>${statusBadge(app, lang)}</div>
              <p>${esc(c.summary)}</p>
              <dl class="facts">
                <div><dt>${t.platforms}</dt><dd>${esc(app.platforms.join(', '))}</dd></div>
                <div><dt>${t.model}</dt><dd>${esc(c.modelShort)}</dd></div>
              </dl>
              <span class="more">${t.learnMore}${ARROW}</span>
            </div>
          </a>
        </article>`;
}

function storeButton(app, lang) {
  const t = strings[lang];
  if (app.status === 'available' && app.googlePlayUrl) {
    return `<a class="btn btn-primary" href="${esc(app.googlePlayUrl)}" rel="noopener">${t.storeGet}</a>`;
  }
  return `<span class="btn btn-disabled" aria-disabled="true">${t.storeUnavailable}</span>`;
}

function draftNotice(lang) {
  const t = strings[lang];
  return `<div class="notice" role="note">
          <span class="badge badge-coming-soon">${t.draftLabel}</span>
          <h2>${t.draftTitle}</h2>
          <p>${t.draftText}</p>
          <p><a href="mailto:${site.supportEmail}">${site.supportEmail}</a></p>
        </div>`;
}

export function home(lang) {
  const t = strings[lang];
  return {
    route: '/',
    title: t.homeTitle,
    description: t.homeDescription,
    body: `      <section class="hero">
        <div class="wrap">
          <p class="eyebrow">${t.homeEyebrow}</p>
          <h1>${t.homeHeadline}</h1>
          <p class="lead">${t.homeLead}</p>
          <div class="actions">
            <a class="btn btn-primary" href="${path(lang, '/apps/')}">${t.homeCtaApps}${ARROW}</a>
            <a class="btn btn-ghost" href="${path(lang, '/support/')}">${t.homeCtaSupport}</a>
          </div>
        </div>
      </section>
      <section class="section" aria-labelledby="apps-h">
        <div class="wrap">
          <div class="section-head">
            <h2 id="apps-h">${t.appsTitle}</h2>
            <p class="muted">${t.appsSectionLead}</p>
          </div>
          <div class="app-grid">
        ${apps.map((a) => appCard(a, lang)).join('\n        ')}
          </div>
        </div>
      </section>
      <section class="section section-alt" aria-labelledby="principles-h">
        <div class="wrap">
          <h2 id="principles-h">${t.principlesTitle}</h2>
          <ul class="principles">
            ${t.principles.map((p) => `<li><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></li>`).join('\n            ')}
          </ul>
        </div>
      </section>`,
  };
}

export function appsIndex(lang) {
  const t = strings[lang];
  return {
    route: '/apps/',
    title: t.appsPageTitle,
    description: t.appsPageDescription,
    body: `      <div class="wrap page">
        ${crumbs(lang, [{ label: t.navApps, route: '/apps/' }])}
        <h1>${t.appsPageHeadline}</h1>
        <p class="lead">${t.appsPageLead}</p>
        <div class="app-grid">
        ${apps.map((a) => appCard(a, lang)).join('\n        ')}
        </div>
        <p class="muted more-soon">${t.moreAppsSoon}</p>
      </div>`,
  };
}

export function appPage(app, lang) {
  const t = strings[lang];
  const c = app.content[lang];
  const base = `/apps/${app.slug}/`;
  return {
    route: base,
    title: c.metaTitle,
    description: c.metaDescription,
    ogType: 'product',
    body: `      <div class="wrap page">
        ${crumbs(lang, [{ label: t.navApps, route: '/apps/' }, { label: app.name, route: base }])}
        <header class="app-hero">
          <img class="app-icon app-icon-lg" src="${app.icon}" alt="${esc(app.iconAlt[lang])}" width="112" height="112">
          <div>
            <div class="app-card-head"><h1>${esc(app.name)}</h1>${statusBadge(app, lang)}</div>
            <p class="lead">${esc(c.tagline)}</p>
            <p class="muted">${t.platforms}: ${esc(app.platforms.join(', '))}</p>
            <div class="actions">${storeButton(app, lang)}</div>
          </div>
        </header>

        <section class="block" aria-labelledby="features-h">
          <h2 id="features-h">${t.appFeatures}</h2>
          <ul class="features">
            ${c.features.map((f) => `<li>${CHECK}<div><h3>${esc(f.title)}</h3><p>${esc(f.text)}</p></div></li>`).join('\n            ')}
          </ul>
        </section>

        <div class="two-col">
          <section class="block card" aria-labelledby="model-h">
            <h2 id="model-h">${t.appModel}</h2>
            <ul class="ticks">${c.model.map((m) => `<li>${esc(m)}</li>`).join('')}</ul>
            <p class="muted small">${esc(c.modelNote)}</p>
          </section>
          <section class="block card" aria-labelledby="data-h">
            <h2 id="data-h">${t.appData}</h2>
            <ul class="ticks">${c.data.map((m) => `<li>${esc(m)}</li>`).join('')}</ul>
          </section>
        </div>
${c.notes ? `
        <section class="block card" aria-labelledby="notes-h">
          <h2 id="notes-h">${t.appNotes}</h2>
          <ul class="ticks">${c.notes.map((m) => `<li>${esc(m)}</li>`).join('')}</ul>
        </section>
` : ''}
        <section class="block" aria-labelledby="links-h">
          <h2 id="links-h">${t.appLinks}</h2>
          <ul class="link-cards">
            <li><a href="${path(lang, base + 'privacy/')}">${t.appPrivacy}${ARROW}</a></li>
            <li><a href="${path(lang, base + 'terms/')}">${t.appTerms}${ARROW}</a></li>
            <li><a href="${path(lang, base + 'support/')}">${t.appSupport}${ARROW}</a></li>
          </ul>
        </section>
      </div>`,
  };
}

const LEGAL_FILE = { privacy: 'privacy_policy', terms: 'terms' };

function appLegal(app, lang, kind) {
  const t = strings[lang];
  const base = `/apps/${app.slug}/`;
  const label = kind === 'privacy' ? t.appPrivacy : t.appTerms;
  const isDraft = app.legal[kind] !== 'final' || !hasLegalText(app.slug, LEGAL_FILE[kind], lang);
  const text = isDraft ? null : renderLegal(app.slug, LEGAL_FILE[kind], lang);
  return {
    route: `${base}${kind}/`,
    title: `${text ? text.title : `${label} – ${app.name}`} | SHneoDesigns`,
    description: `${label} – ${app.name} (SHneoTools, SHneoDesigns).`,
    noindex: isDraft,
    draft: isDraft,
    body: `      <div class="wrap page prose legal">
        ${crumbs(lang, [
          { label: t.navApps, route: '/apps/' },
          { label: app.name, route: base },
          { label, route: `${base}${kind}/` },
        ])}
        <h1>${text ? esc(text.title) : `${label} – ${esc(app.name)}`}</h1>
        ${text ? text.html : draftNotice(lang)}
      </div>`,
  };
}

export const appPrivacy = (app, lang) => appLegal(app, lang, 'privacy');
export const appTerms = (app, lang) => appLegal(app, lang, 'terms');

function supportBox(lang, subject) {
  const t = strings[lang];
  const href = subject ? `mailto:${site.supportEmail}?subject=${encodeURIComponent(subject)}` : `mailto:${site.supportEmail}`;
  return `<div class="support-box">
          ${MAIL}
          <div>
            <p class="small muted">${t.supportEmailLabel}</p>
            <a class="support-mail" href="${href}">${site.supportEmail}</a>
          </div>
        </div>
        <section class="block" aria-labelledby="hints-h">
          <h2 id="hints-h">${t.supportHintTitle}</h2>
          <ul class="ticks">${t.supportHints.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
          <p class="muted small">${t.supportNoSecrets}</p>
        </section>`;
}

export function appSupport(app, lang) {
  const t = strings[lang];
  const base = `/apps/${app.slug}/`;
  return {
    route: `${base}support/`,
    title: `${t.appSupport} – ${app.name} | SHneoDesigns`,
    description: `${t.appSupport} ${app.name}: ${t.supportDescription}`,
    body: `      <div class="wrap page">
        ${crumbs(lang, [
          { label: t.navApps, route: '/apps/' },
          { label: app.name, route: base },
          { label: t.appSupport, route: `${base}support/` },
        ])}
        <h1>${t.appSupport} – ${esc(app.name)}</h1>
        <p class="lead">${t.supportLead}</p>
        ${supportBox(lang, app.name)}
      </div>`,
  };
}

export function support(lang) {
  const t = strings[lang];
  return {
    route: '/support/',
    title: t.supportTitle,
    description: t.supportDescription,
    body: `      <div class="wrap page">
        ${crumbs(lang, [{ label: t.navSupport, route: '/support/' }])}
        <h1>${t.supportHeadline}</h1>
        <p class="lead">${t.supportLead}</p>
        ${supportBox(lang)}
        <section class="block" aria-labelledby="apps-support-h">
          <h2 id="apps-support-h">${t.supportAppPages}</h2>
          <ul class="link-cards">
            ${apps.map((a) => `<li><a href="${path(lang, `/apps/${a.slug}/support/`)}">${esc(a.name)}${ARROW}</a></li>`).join('\n            ')}
          </ul>
        </section>
      </div>`,
  };
}

// The imprint is the same text the apps bundle (content/legal/site/).
export function imprint(lang) {
  const t = strings[lang];
  const text = renderLegal('site', 'imprint', lang);
  return {
    route: '/legal/imprint/',
    title: t.imprintTitle,
    description: t.imprintDescription,
    body: `      <div class="wrap page prose legal">
        ${crumbs(lang, [{ label: t.imprintHeadline, route: '/legal/imprint/' }])}
        <h1>${esc(text.title)}</h1>
        ${text.html}
      </div>`,
  };
}

export function sitePrivacy(lang) {
  const t = strings[lang];
  const text = renderLegal('site', 'privacy', lang);
  return {
    route: '/legal/privacy/',
    title: t.sitePrivacyTitle,
    description: t.sitePrivacyDescription,
    body: `      <div class="wrap page prose legal">
        ${crumbs(lang, [{ label: t.sitePrivacyHeadline, route: '/legal/privacy/' }])}
        <h1>${esc(text.title)}</h1>
        ${text.html}
      </div>`,
  };
}

export function notFound() {
  const de = strings.de;
  const en = strings.en;
  return {
    route: '/404.html',
    title: `${de.notFoundHeadline} · ${en.notFoundHeadline}`,
    description: de.notFoundText,
    noindex: true,
    standalone: true,
    body: `      <div class="wrap page center">
        <p class="eyebrow">404</p>
        <h1>${de.notFoundHeadline}</h1>
        <p class="lead">${de.notFoundText}</p>
        <ul class="link-cards narrow">
          <li><a href="/">${de.navHome}${ARROW}</a></li>
          <li><a href="/apps/">${de.navApps}${ARROW}</a></li>
          <li><a href="/support/">${de.navSupport}${ARROW}</a></li>
        </ul>
        <div lang="en" class="alt-lang">
          <h2>${en.notFoundHeadline}</h2>
          <p>${en.notFoundText}</p>
          <ul class="link-cards narrow">
            <li><a href="/en/">${en.navHome}${ARROW}</a></li>
            <li><a href="/en/apps/">${en.navApps}${ARROW}</a></li>
            <li><a href="/en/support/">${en.navSupport}${ARROW}</a></li>
          </ul>
        </div>
      </div>`,
  };
}
