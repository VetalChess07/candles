const productsContainer = document.querySelector("#products-container");
console.log(productsContainer);

getProducts();

async function getProducts() {
  const response = await fetch("../js/product.json");
  console.log(response);
  const productsArray = await response.json();
  console.log(productsArray);

  renderProducts(productsArray);
}

function renderProducts(productsArray) {
  productsArray.forEach(function (item) {
    const productHtml = `
   
      <div class="col-md-6">
						<div class="card mb-4" data-id="${item.id}">
							<img class="product-img" src="img/${item.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${item.title}</h4>
								<p><small data-items-in-box class="text-muted">${item.itemInBox} шт.</small></p>

								<div class="details-wrapper">
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>

									<div class="price">
										<div class="price__weight">${item.weight}.</div>
										<div class="price__currency">${item.price}₽</div>
									</div>
								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

							</div>
						</div>
					</div>

   `;

    productsContainer.insertAdjacentHTML("beforeend", productHtml);
  });
}
