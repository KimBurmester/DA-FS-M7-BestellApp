function orderingTheBasket(){

  basket.length = 0;
  renderBasket();
  updateTotals();

  const oldMsg = document.getElementById('order-message');
  if (oldMsg) oldMsg.remove();

  const orderingBtn = document.querySelector('.ordering');
  const msg = document.createElement('div');
  msg.id = 'order-message';
  msg.innerHTML = '<p>Bestellung ist eingegangen</p>';
  orderingBtn.insertAdjacentElement('afterend', msg);
  setTimeout(() => {
    msg.remove();
  }, 5000);
  dishesInit();
  autoResetDeliveryToggle();
}

function autoResetDeliveryToggle() {
  setTimeout(() => {
    const toggle = document.getElementById('deliveryToggle');
    const basketRef = document.getElementById('dish-basket');
    toggle.checked = false;
    document.getElementById('dish-deliverycosts').innerHTML = '<span>0.00 €</span>';
    document.getElementById('dish-totalprice').innerHTML = '<span>0.00 €</span>';
    basketRef.innerHTML = '';


    const toggleText = document.getElementById('toggleText');
    if (toggleText) {
      toggleText.textContent = 'Lieferkosten aus';
    }
  }, 5000);
}