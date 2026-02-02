const langBtn = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || 'ru';

loadLang(currentLang);

langBtn.onclick = () => {
  currentLang = currentLang === 'ru' ? 'en' : 'ru';
  loadLang(currentLang);
};

function loadLang(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        el.textContent = key.split('.').reduce((o, i) => o[i], data);
      });
      langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
      localStorage.setItem('lang', lang);
    });
}