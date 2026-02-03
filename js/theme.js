function toggleTheme() {
  const link = document.getElementById('theme-style');
  const dark = link.getAttribute('href').includes('dark');
  link.href = dark ? 'css/light.css' : 'css/dark.css';
  localStorage.setItem('theme', dark ? 'light' : 'dark');
}

(() => {
  const theme = localStorage.getItem('theme') || 'dark';
  document.getElementById('theme-style').href = `css/${theme}.css`;
})();
