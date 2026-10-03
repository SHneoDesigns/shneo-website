// Site-wide configuration. Everything that is not app specific lives here.

export const site = {
  origin: 'https://shneo.app',
  brand: 'SHneoDesigns',
  portfolio: 'SHneoTools',
  supportEmail: 'support@shneo.app',
  // Languages in display order. The first one is served without a path
  // prefix (/apps/...), every other one under /<code>/ (/en/apps/...).
  languages: [
    { code: 'de', locale: 'de_DE', label: 'Deutsch', short: 'DE' },
    { code: 'en', locale: 'en_US', label: 'English', short: 'EN' },
  ],
};

// Confirmed company data (provided by the owner). Do not add anything that
// has not been confirmed.
export const company = {
  name: 'SHneoDesigns',
  owner: 'Steven Detlef Hahn',
  street: 'Clara-Zetkin-Str. 19',
  postalCode: '04610',
  city: 'Meuselwitz',
  country: { de: 'Deutschland', en: 'Germany' },
  email: 'support@shneo.app',
  phone: '+49 1520 3627692',
  phoneHref: '+4915203627692',
  vatId: 'DE459948024',
};

export const defaultLanguage = site.languages[0].code;

/** URL path of a page for a language, e.g. path('en', '/apps/') -> '/en/apps/'. */
export function path(lang, route) {
  return lang === defaultLanguage ? route : `/${lang}${route}`;
}

export function absolute(lang, route) {
  return site.origin + path(lang, route);
}
