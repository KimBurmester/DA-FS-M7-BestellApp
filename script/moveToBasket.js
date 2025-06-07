/*//NOTE: Move to Basket Logic */
function addStarterToBasket(i) {
  const starter = allDishes.starter[i];
  const existing = basket.find(d => d.name === starter.name);
  if (existing) {
    existing.amount++;
  } else {
    basket.push({
      name: starter.name,
      price: starter.price,
      amount: 1
    });
  }
  renderBasket();
}
function addDishToBasket(i) {
  const dish = allDishes.dishes[i];
  const existing = basket.find(d => d.name === dish.name);
  if (existing) {
    existing.amount++;
  } else {
    basket.push({
      name: dish.name,
      price: dish.price,
      amount: 1
    });
  }
  renderBasket();
}
function addDessertToBasket(i) {
  const dessert = allDishes.dessert[i];
  const existing = basket.find(d => d.name === dessert.name);
  if (existing) {
    existing.amount++;
  } else {
    basket.push({
      name: dessert.name,
      price: dessert.price,
      amount: 1
    });
  }
  renderBasket();
}