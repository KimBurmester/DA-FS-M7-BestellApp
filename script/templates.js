function renderStarterDishesTemplate(i) {
  const mobile = isMobileView();
  return `
    <div class="dish-card" id="dish-card" onclick="addStarterToBasket(${i}, 'starter', '${basket}')">
      <div class="dish-header">
        <div class="dish-title" id="dish-title">
          ${allDishes.starter[i].name}
        </div>
        <div class="dish-adding">+</div>
      </div>
      ${!mobile ? `<div class="dish-description" id="dish-description">
             ${allDishes.starter[i].description}</div>` : ``}
      <div class="dish-price" id="dish-price">
        ${allDishes.starter[i].price.toFixed(2)}€</div></div>`;
}

function renderMainDishesTemplate(i) {
  const mobile = isMobileView();
  return `
    <div class="dish-card" id="dish-card" onclick="addDishToBasket(${i}, 'dishes', '${basket}')">
      <div class="dish-header">
        <div class="dish-title" id="dish-title">
          ${allDishes.dishes[i].name}
        </div>
        <div class="dish-adding">+</div>
      </div> ${!mobile ? `<div class="dish-description" id="dish-description">
             ${allDishes.dishes[i].description}
           </div>`: ``}
           <div class="dish-price" id="dish-price">${allDishes.dishes[i].price.toFixed(2)}€</div></div>`;
}


function renderDessertDishesTemplate(i) {
  const mobile = isMobileView();
  return `
    <div class="dish-card" id="dish-card" onclick="addDessertToBasket(${i}, 'dessert', '${basket}')">
      <div class="dish-header">
        <div class="dish-title" id="dish-title">
          ${allDishes.dessert[i].name}
        </div>
        <div class="dish-adding">+</div>
      </div>${!mobile ? `<div class="dish-description" id="dish-description">
             ${allDishes.dessert[i].description} </div>` : ``}
      <div class="dish-price" id="dish-price">${allDishes.dessert[i].price.toFixed(2)}€</div></div>`;        
}

function BasketTemplate(d, i) {
    return `
    <div class="dish-card">
      <div class="dish-header">
        <div class="dish-title">${d.name}</div>
      </div>
      <div class="basket-amount">
        <div class="basket-substract" onclick="changeAmount(${i}, -1)">-</div>
        ${d.amount}
        <div class="basket-add" onclick="changeAmount(${i}, 1)">+</div>
        <div class="basket-price">${(d.price * d.amount).toFixed(2)}€</div>
        <div class="basket-trash" onclick="removeFromBasket(${i})">🗑</div>
      </div>
    </div>
  `;
}