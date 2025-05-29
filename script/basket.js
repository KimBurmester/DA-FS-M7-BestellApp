document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("basket-toggle");
  const basket = document.querySelector(".basket");

  toggle.addEventListener("click", function() {
    basket.classList.toggle("open");
  });
});


/*//NOTE: Move To Basket Logic */

