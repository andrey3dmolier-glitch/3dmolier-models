const grid = document.getElementById('model-grid');
const buttons = document.querySelectorAll('.filter-button');
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

function renderModels(filter = 'all') {
  if (!grid) return;
  const filtered = filter === 'all' ? models : models.filter(model => model.category === filter);
  grid.innerHTML = filtered.map(model => `
    <article class="model-card">
      <div class="model-image">
        ${model.image ? `<img src="${model.image}" alt="${model.title}">` : `<span>${model.title}</span>`}
      </div>
      <div class="model-body">
        <h3>${model.title}</h3>
        <p>${model.description}</p>
        <div class="tags">${model.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        <a class="card-link" href="${model.url}" rel="sponsored nofollow">View on TurboSquid →</a>
      </div>
    </article>
  `).join('');
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderModels(button.dataset.filter);
  });
});

renderModels();
