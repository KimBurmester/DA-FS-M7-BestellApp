/* document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("basket-toggle");
  const basket = document.querySelector(".basket");

  toggle.addEventListener("click", function() {
    basket.classList.toggle("open");
  });
}); */


/*//NOTE: Move To Basket Logic */
document.getElementById('basket-toggle')
  .addEventListener('click', () => {
    document.querySelector('.basket_wrapper')
      .classList.toggle('open');
  });
