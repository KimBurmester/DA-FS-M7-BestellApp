function renderBasket() {
  const basketRef = document.getElementById('dish-basket');
  if (!basket.length) {
    basketRef.innerHTML = '<p>Dein Warenkorb ist leer</p>';
    return;
  }
  basketRef.innerHTML = basket
    .map((d, i) => BasketTemplate(d, i))
    .join('');
  updateTotals();
  dishesInit();
}

