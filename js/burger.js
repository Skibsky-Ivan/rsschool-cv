export function initBurger() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  if (!burger || !nav || !navLinks) return;

  const toggleMenu = () => {
    const isOpen = nav.classList.toggle('nav--open');
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('no-scroll', isOpen);
  };

  burger.addEventListener('click', toggleMenu);
  navLinks.addEventListener('click', toggleMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
      toggleMenu();
    }
  });
}
