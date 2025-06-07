let basket = [];

function isMobileView() { // NOTE: Starter, Main and Dessert Opening
  return window.innerWidth <= 800;
}

function attachResizeHandler() { // NOTE: Starter, Main and Dessert Opening
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      dishesInit();
    }, 150);
  });
}

function dishesInit() {
    renderStarterDishes();
    renderMainDishes();
    renderDessertDishes();
};

function changeAmount(i, amountChange) {
  basket[i].amount += amountChange;
  if (basket[i].amount <= 0) basket.splice(i, 1);
  renderBasket();
  updateTotals()
}
function removeFromBasket(i) {
  basket.splice(i, 1);
  renderBasket();
  updateTotals()
}


const deliveryCosts = 5.00;

function calculateSubtotal() {
  return basket.reduce((sum, item) => sum + item.price * item.amount, 0);
}

function getDeliveryCost() {
  const deliveryToggle = document.getElementById('deliveryToggle');
  return deliveryToggle.checked ? deliveryCosts : 0;
}

function renderToggleText() {
  const deliveryToggle = document.getElementById('deliveryToggle');
  const toggleText = deliveryToggle.checked ? 'Lieferkosten ein' : 'Lieferkosten aus';
  document.getElementById('toggleText').textContent = toggleText;
}

function renderSubtotal(subtotal) {
  document.getElementById('dish-subtotal').textContent = subtotal.toFixed(2) + ' €';
}

function renderDeliveryCosts(costs) {
  document.getElementById('dish-deliverycosts').textContent = costs.toFixed(2) + ' €';
}

function renderTotalPrice(total) {
  document.getElementById('dish-totalprice').textContent = total.toFixed(2) + ' €';
}

function updateTotals() {
  const subtotal = calculateSubtotal();
  const deliveryCost = getDeliveryCost();
  renderToggleText();
  renderSubtotal(subtotal);
  renderDeliveryCosts(deliveryCost);
  renderTotalPrice(subtotal + deliveryCost);
}

document.addEventListener('DOMContentLoaded', () => {
  dishesInit(); 
  attachResizeHandler(); 
  const deliveryToggle = document.getElementById('deliveryToggle');
  deliveryToggle.addEventListener('change', updateTotals);
  updateTotals();
});