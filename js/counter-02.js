window.addEventListener("click", function (event) {
  let counter;

  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const countWrap = event.target.closest(".counter-wrapper");

    counter = countWrap.querySelector("[data-counter]");
  }

  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }
  if (event.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      console.log("in cart");
      event.target.closest(".cart-item").remove();

      toggleCartStatus();
      cartPrice();
    }
  }

  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    cartPrice();
  }
});
