export function initHeader() {
  const navWrapper = document.querySelector('.nav-wrapper');
  if (!navWrapper) return;

  const onScroll = () => {
    navWrapper.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
