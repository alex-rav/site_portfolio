const themeBtn = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-style');

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeBtn.onclick = () => {
  const newTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
};

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeLink.href = `css/${theme}.css`;
  localStorage.setItem('theme', theme);
}