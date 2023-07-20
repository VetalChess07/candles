const inputCart = document.querySelector("#order-form");
inputCart.classList.add("none");

function toggleCartStatus() {
  const cartWrapper = document.querySelector(".cart-wrapper");

  const cartEmpty = document.querySelector("[data-cart-empty]");

  if (cartWrapper.children.length > 0) {
    cartEmpty.classList.add("none");
    inputCart.classList.remove("none");
  } else {
    cartEmpty.classList.remove("none");
    inputCart.classList.add("none");
  }
}
