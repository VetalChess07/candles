function cartPrice() {
  const cartItem = document.querySelectorAll(".cart-item");
  const totalPriceEl = document.querySelector(".total-price");

  let totalPrice = 0;

  cartItem.forEach(function (item) {
    const amountEm = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".price__currency");

    const sumEl = parseInt(amountEm.innerText) * parseInt(priceEl.innerText);
    console.log(sumEl);
    totalPrice = totalPrice + sumEl;
  });

  totalPriceEl.innerText = totalPrice;

  const deliveryText = document.querySelector(".delivery-cost");

  if (totalPrice > 600) {
    console.log("ff");
    deliveryText.innerText = "Бесплатно!";
  } else {
    console.log("gg");
    deliveryText.innerText = "300 ₽";
  }
}
