let starters = [
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
];

let dishes = [
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
];

let desserts = [
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
];


function dishesInit() {
    renderStarterDishes();
    renderMainDishes();
    renderDessertDishes();
};

function renderStarterDishes() {
  let contentRef = document.getElementById('starterMenu');
  for (let i = 0; i < starters.length; i++) {
    contentRef.innerHTML += renderStarterDishesTemplate(i);
  }
}

function renderMainDishes() {
    let contentRef = document.getElementById('mainMenu');
    for (let i = 0; i < dishes.length; i++) {
        contentRef.innerHTML += renderMainDishesTemplate(i);
    }
}

function renderStarterDishesTemplate(i) {
    return `<div class="dish-card" id="dish-card">
              <div class="dish-header">
                <div class="dish-title" id="dish-title">${starters[i].name}</div>
                <div class="dish-adding">+</div>
              </div>
              <div class="dish-description" id="dish-description">${starters[i].description}</div>
              <div class="dish-price" id="dish-price">${starters[i].price.toFixed(2)}€</div>
            </div>`;
}

function renderMainDishesTemplate(i) {
    return `<div class="dish-card" id="dish-card">
              <div class="dish-header">
                <div class="dish-title" id="dish-title">${dishes[i].name}</div>
                <div class="dish-adding">+</div>
              </div>
              <div class="dish-description" id="dish-description">${dishes[i].description}</div>
              <div class="dish-price" id="dish-price">${dishes[i].price.toFixed(2)}€</div>
            </div>`;
}



