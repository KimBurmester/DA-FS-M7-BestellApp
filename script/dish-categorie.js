document.querySelectorAll('.dish-categorie-title').forEach(title => {
  title.addEventListener('click', () => {
    title.classList.toggle('collapsed');
  });
});