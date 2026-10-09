const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open');
  });
}

document.querySelectorAll('.site-nav a').forEach((link) => {
  const current = location.pathname.split('/').pop() || 'index.html';
  const target = link.getAttribute('href');
  if (target === current) link.setAttribute('aria-current', 'page');
});

