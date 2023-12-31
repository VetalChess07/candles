const cardWrapper = document.querySelector(".cart-wrapper");

window.addEventListener("click", function (e) {
  if (e.target.hasAttribute("data-cart")) {
    const card = e.target.closest(".card");
    console.log(card);

    const productInfo = {
      id: card.dataset.id,
      imgSorce: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemsInBox: card.querySelector(".text-muted").innerText,
      price: card.querySelector(".price__currency").innerText,
      weight: card.querySelector(".price__weight").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };

    const itemInCart = cardWrapper.querySelector(
      `[data-id="${productInfo.id}" ]`
    );

    if (itemInCart) {
      const counterElementInCart = itemInCart.querySelector("[data-counter]");
      counterElementInCart.innerText =
        parseInt(counterElementInCart.innerText) +
        parseInt(productInfo.counter);
    } else {
      // console.log(productInfo);

      const cartItem = `
    <div class="cart-item" data-id="${productInfo.id}">
    <div class="cart-item__top">
      <div class="cart-item__img">
        <img src="${productInfo.imgSorce}" alt="">
      </div>
      <div class="cart-item__desc">
        <div class="cart-item__title">${productInfo.title}</div>
        <div class="cart-item__weight">${productInfo.weight}</div>

        <!-- cart-item__details -->
        <div class="cart-item__details">

          <div class="items items--small counter-wrapper">
            <div class="items__control" data-action="minus">-</div>
            <div class="items__current" data-counter="">${productInfo.counter}</div>
            <div class="items__control" data-action="plus">+</div>
          </div>

          <div class="price">
            <div class="price__currency">${productInfo.price}</div>
          </div>

        </div>
        <!-- // cart-item__details -->

      </div>
    </div>
  </div> `;

      cardWrapper.insertAdjacentHTML("beforeend", cartItem);
    }

    card.querySelector("[data-counter]").innerText = 1;
    toggleCartStatus();
    cartPrice();
  }
});
