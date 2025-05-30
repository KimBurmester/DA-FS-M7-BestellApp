function orderingTheBasket(){

  basket.length = 0;
  renderBasket();
  updateTotals();

  const oldMsg = document.getElementById('order-message');
  if (oldMsg) oldMsg.remove();

  const orderingBtn = document.querySelector('.ordering');
  const msg = document.createElement('div');
  msg.id = 'order-message'
  msg.innerHTML = '<p>Bestellung ist eingegangen</p>';
  orderingBtn.insertAdjacentElement('afterend', msg);
}