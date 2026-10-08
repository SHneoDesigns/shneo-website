// App registry. A new app = one file in src/apps/ (same shape as
// lastdone.mjs) plus one line here. Pages, overview cards, legal/support
// routes and the sitemap are generated from this list.

import lastdone from './lastdone.mjs';
import shiftcheck from './shiftcheck.mjs';
import toolnest from './toolnest.mjs';

export const apps = [lastdone, shiftcheck, toolnest];
