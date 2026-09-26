const DEFAULT_THEME = 'dark';

export function initTheme() {
  const themeToggle = document.querySelector('.theme-toggle');
  const root = document.documentElement;

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    themeToggle?.setAttribute('aria-pressed', String(theme !== DEFAULT_THEME));
  };

  const savedTheme = localStorage.getItem('theme') || DEFAULT_THEME;
  applyTheme(savedTheme);

  themeToggle?.addEventListener('click', () => {
    const nextTheme =
      root.dataset.theme === DEFAULT_THEME ? 'light' : DEFAULT_THEME;

    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
}
