function renderStarterDishes() {
  let contentRef = document.getElementById('starterMenu');
  contentRef.innerHTML = "";
  for (let i = 0; i < allDishes.starter.length; i++) {
    contentRef.innerHTML += renderStarterDishesTemplate(i);
  }
}

function renderMainDishes() {
  let contentRef = document.getElementById('mainMenu');
  contentRef.innerHTML = "";
  for (let i = 0; i < allDishes.dishes.length; i++) {
    contentRef.innerHTML += renderMainDishesTemplate(i);
  }
}

function renderDessertDishes() {
    let contentRef = document.getElementById('dessertMenu');
    contentRef.innerHTML = "";
    for (let i = 0; i < allDishes.dessert.length; i++) {
      contentRef.innerHTML += renderDessertDishesTemplate(i);
    }
}

