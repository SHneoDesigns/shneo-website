// Applies a colour scheme the visitor chose explicitly (stored only after a
// click on the theme button). Without a choice the system setting is used.
(function () {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
})();
