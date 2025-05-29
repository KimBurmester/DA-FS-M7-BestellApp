/*//NOTE: Dishes Render Script */
let allDishes = {
  'starter': [
  {
    name: "Bruschetta",
    description: "Geröstetes Brot mit Tomatenwürfeln, Knoblauch, Basilikum und Olivenöl",
    price: 5.50
  },
  {
    name: "Caprese",
    description: "Tomaten mit Mozzarella, frischem Basilikum und Balsamico-Reduktion",
    price: 6.20
  },
  {
    name: "Antipasti-Teller",
    description: "Auswahl an gegrilltem Gemüse, Oliven, Salami und Käse",
    price: 7.80
  },
  {
    name: "Garnelencocktail",
    description: "Kalte Garnelen in Cocktailsauce mit Salatbett",
    price: 6.90
  },
  {
    name: "Zucchini-Röllchen",
    description: "Mit Frischkäse gefüllte Zucchinistreifen, auf Rucola serviert",
    price: 5.80
  }
  ],
  'dishes' : [
  {
    name: "Spaghetti Bolognese",
    description: "Hausgemachte Spaghetti mit traditioneller Rindfleisch-Bolognese",
    price: 11.50
  },
  {
    name: "Margherita Pizza",
    description: "Knuspriger Pizzaboden mit Tomatensauce, Mozzarella und frischem Basilikum",
    price: 9.90
  },
  {
    name: "Caesar Salad",
    description: "Römersalat mit Hähnchenstreifen, Croutons und Caesar-Dressing",
    price: 10.20
  },
  {
    name: "Kürbisrisotto",
    description: "Cremiges Risotto mit Hokkaidokürbis und Parmesan",
    price: 12.30
  },
  {
    name: "Lachsfilet mit Gemüse",
    description: "Gebratenes Lachsfilet auf einem Bett aus mediterranem Gemüse",
    price: 14.80
  },
  {
    name: "Rinderfilet mit Pfeffersauce",
    description: "Gegrilltes Filet mit grünem Pfeffer, serviert mit Kartoffelgratin",
    price: 21.90
  },
  {
    name: "Vegetarische Lasagne",
    description: "Mit Zucchini, Aubergine, Paprika und Bechamelsauce",
    price: 12.50
  },
  {
    name: "Hähnchen-Curry",
    description: "Cremiges Curry mit Basmatireis und Gemüse",
    price: 13.20
  },
  {
    name: "Zanderfilet mit Zitronenbutter",
    description: "Gebratener Zander auf Gemüsebett mit Zitronenbuttersauce",
    price: 18.40
  },
  {
    name: "Schnitzel Wiener Art",
    description: "Kalbsschnitzel mit Pommes frites und Zitrone",
    price: 15.90
  }
  ],
  'dessert' : [
  {
    name: "Tiramisu",
    description: "Klassisches italienisches Dessert mit Mascarpone und Kaffee",
    price: 5.90
  },
  {
    name: "Panna Cotta",
    description: "Sahnige Nachspeise mit Himbeersauce",
    price: 5.50
  },
  {
    name: "Crème Brûlée",
    description: "Vanillecreme mit karamellisierter Zuckerschicht",
    price: 6.00
  },
  {
    name: "Schokoladenfondant",
    description: "Warmer Schokokuchen mit flüssigem Kern, serviert mit Vanilleeis",
    price: 6.50
  },
  {
    name: "Fruchtsalat",
    description: "Frische Früchte der Saison, leicht gesüßt",
    price: 4.80
  }
  ]
}

let basket = [];

function dishesInit() {
    renderStarterDishes();
    renderMainDishes();
    renderDessertDishes();
};

/*//NOTE: Starter Dish Logik */
function renderStarterDishes() {
  let contentRef = document.getElementById('starterMenu');
  contentRef.innerHTML = "";
  for (let i = 0; i < allDishes.starter.length; i++) {
    contentRef.innerHTML += renderStarterDishesTemplate(i);
  }
}

function renderStarterDishesTemplate(i) {
    return `<div class="dish-card" id="dish-card" onclick="addStarterToBasket(${i}, 'starter', '${basket}')">
              <div class="dish-header">
                <div class="dish-title" id="dish-title">${allDishes.starter[i].name}</div>
                <div class="dish-adding">+</div>
              </div>
              <div class="dish-description" id="dish-description">${allDishes.starter[i].description}</div>
              <div class="dish-price" id="dish-price">${allDishes.starter[i].price.toFixed(2)}€</div>
            </div>`;
}

/*//NOTE: Main Dish Logik */
function renderMainDishes() {
  let contentRef = document.getElementById('mainMenu');
  contentRef.innerHTML = "";
  for (let i = 0; i < allDishes.dishes.length; i++) {
    contentRef.innerHTML += renderMainDishesTemplate(i);
  }
}

function renderMainDishesTemplate(i) {
    return `<div class="dish-card" id="dish-card" onclick="addToBasket(${i}, 'dishes', '${basket}')">
              <div class="dish-header">
                <div class="dish-title" id="dish-title">${allDishes.dishes[i].name}</div>
                <div class="dish-adding">+</div>
              </div>
              <div class="dish-description" id="dish-description">${allDishes.dishes[i].description}</div>
              <div class="dish-price" id="dish-price">${allDishes.dishes[i].price.toFixed(2)}€</div>
            </div>`;
}


/*//NOTE: Dessert Dish Logik */
function renderDessertDishes() {
    let contentRef = document.getElementById('dessertMenu');
    for (let i = 0; i < allDishes.dessert.length; i++) {
      contentRef.innerHTML += renderDessertDishesTemplate(i);
    }
}

function renderDessertDishesTemplate(i) {
    return `<div class="dish-card" id="dish-card" onclick="addToBasket(${i}, 'dessert', '${basket}')">
              <div class="dish-header">
                <div class="dish-title" id="dish-title">${allDishes.dessert[i].name}</div>
                <div class="dish-adding">+</div>
              </div>
              <div class="dish-description" id="dish-description">${allDishes.dessert[i].description}</div>
              <div class="dish-price" id="dish-price">${allDishes.dessert[i].price.toFixed(2)}€</div>
            </div>`;
}


function addStarterToBasket(i, startKey, destinationKey) {
  let dish = allDishes.starter[startKey].splice(i, 1);
  basket[destinationKey].push(dish[0]);
  
  renderStarterBasket();
}

function renderStarterBasket() {
  let starterBasketRef = document.getElementById('dish-basket');
  starterBasketRef.innerHTML = "";
  for (let i = 0; i < allDishes.starter.length; i++) {
    starterBasketRef.innerHTML += renderStarterBasketTemplate(i); 
  }
}

function renderStarterBasketTemplate() {
  return `<div class="dish-card" id="dish-card">
              <div class="dish-header">
                <div class="dish-title" id="dish-title">${allDishes.starter[i].name}</div>
              </div>
              <div class="basket-amount">
                <div class="basket-substract">-</div>
                <div class="basket-add">+</div>
                <div class="basket-price">${allDishes.starter[i].price.toFixed(2)}</div>
                <div class="basket-trash">🗑</div>
              </div>
            </div>`;
}