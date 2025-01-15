"use strict";

const basketOne = document.querySelector(".basket-1");
const basketTwo = document.querySelector(".basket-2");
const basketThree = document.querySelector(".basket-3");
const products = document.querySelectorAll(".item");
const btnPay = document.querySelector(".btnPay");
const basket = document.querySelector(".basket");
const produktsInBasket = {
  basketOne: ["wine", "milk", "cake", "chese"],
  basketTwo: ["beef", "chicken", "cheeps"],
  basketThree: ["pineapple", "banana", "apple", "salad"],
};

let current;

products.forEach(function (elem) {
  elem.addEventListener("dragstart", function (e) {
    current = this;
  });
});

basket.addEventListener("dragover", function (e) {
  e.preventDefault();
});

let count = 0;
let zIndex = 1;

function updateBasket(produktsInBasket, basket, productName) {
  if (produktsInBasket.includes(productName)) {
    basket.appendChild(current);
    basket.style = `z-index: ${zIndex++}`;
    count += 1;
    console.log(count);
  }
}

basket.addEventListener("drop", function (e) {
  if (!current) return;
  let productName = current.className.split(" ")[1];
  console.log(productName);

  updateBasket(produktsInBasket.basketOne, basketOne, productName);
  updateBasket(produktsInBasket.basketTwo, basketTwo, productName);
  updateBasket(produktsInBasket.basketThree, basketThree, productName);

  if (count >= 3) {
    btnPay.classList.add("btnPay-visible");
  }
});

btnPay.addEventListener("click", () => {
  window.location.href = "https://lavka.yandex.ru/";
});

function togglePulse() {
  btnPay.classList.toggle("pulsate");
}

setInterval(togglePulse, 2000);
