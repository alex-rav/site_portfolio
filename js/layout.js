async function loadPartial(id, file) {
  const res = await fetch(`partials/${file}`);
  document.getElementById(id).innerHTML = await res.text();
}

async function loadContent() {
  const lang = localStorage.getItem('lang') || 'ru';
  const data = await fetch(`content/${lang}.json`).then(r => r.json());

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (data[key]) el.textContent = data[key];
  });

  const projects = document.getElementById('projects');
  if (projects && data.projects) {
    projects.innerHTML = '';
    data.projects.forEach(p => {
      projects.innerHTML += `
        <div class="card">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>`;
    });
  }
}

window.setLang = lang => {
  localStorage.setItem('lang', lang);
  location.reload();
};

(async () => {
  await loadPartial('header', 'header.html');
  await loadPartial('footer', 'footer.html');
  await loadContent();
  setActiveNav();
})();

  function setActiveNav() {
  const current = location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
    }
  });
}