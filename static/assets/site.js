// Theme toggle. The page works fully without JavaScript; the button only
// appears when this script runs.
(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  if (!button) return;
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function current() {
    return root.getAttribute('data-theme') || (media.matches ? 'dark' : 'light');
  }
  function label() {
    var next = current() === 'dark' ? 'light' : 'dark';
    var text = button.getAttribute(next === 'dark' ? 'data-label-dark' : 'data-label-light');
    button.setAttribute('aria-label', text);
    button.setAttribute('title', text);
  }

  button.hidden = false;
  label();
  button.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
    label();
  });
  media.addEventListener('change', label);
})();
