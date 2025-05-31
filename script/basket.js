/*//NOTE: Move To Basket Logic */
document.getElementById('basket-toggle')
  .addEventListener('click', () => {
    document.querySelector('.basket_wrapper')
      .classList.toggle('open');
      dishesInit();
  });
