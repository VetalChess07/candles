const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector("[data-counter]");

btnMinus.addEventListener("click", function () {
  console.log("minus");
  //   if (counter.innerText > 0) {
  //     counter.innerText = --counter.innerText;
  //   }
  if (parseInt(counter.innerText) > 1) {
    counter.innerText = --counter.innerText;
  }
});

btnPlus.addEventListener("click", function () {
  console.log("plus");

  counter.innerText = ++counter.innerText;
});
