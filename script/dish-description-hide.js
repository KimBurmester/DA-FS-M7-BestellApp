  document.addEventListener('DOMContentLoaded', () => {
    hideDescriptions();
  });

  function hideDescriptions() {
    const beschreibungen = document.querySelectorAll('.dish-description');
    beschreibungen.forEach(el => {
      el.remove();
    });
  }