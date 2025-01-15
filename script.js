"use strict";

const products = document.querySelectorAll(".item");
const baskets = {
  basketOne: document.querySelector(".basket-1"),
  basketTwo: document.querySelector(".basket-2"),
  basketThree: document.querySelector(".basket-3"),
};
const btnPay = document.querySelector(".btnPay");
const basket = document.querySelector(".basket");
const produktsInBasket = {
  basketOne: ["wine", "milk", "cake", "cheese"],
  basketTwo: ["beef", "chicken", "chips"],
  basketThree: ["pineapple", "banana", "apple", "salad"],
};

let current,
  count = 0,
  zIndex = 1;

products.forEach((elem) => {
  elem.addEventListener("dragstart", () => (current = elem));
  elem.addEventListener("touchstart", () => (current = elem));
});

basket.addEventListener("dragover", (e) => e.preventDefault());

basket.addEventListener("touchmove", (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  basket.style.backgroundColor =
    target && target.classList.contains("basket") ? "lightblue" : "";
});

function updateBasket(basket, productName) {
  if (produktsInBasket[basket].includes(productName)) {
    baskets[basket].appendChild(current);
    baskets[basket].style.zIndex = zIndex++;
    count++;
  }
}

function handleDrop() {
  if (!current) return;
  const productName = current.className.split(" ")[1];
  Object.keys(baskets).forEach((basket) => updateBasket(basket, productName));
  if (count >= 3) btnPay.classList.add("btnPay-visible");
}

basket.addEventListener("drop", handleDrop);
basket.addEventListener("touchend", handleDrop);

btnPay.addEventListener(
  "click",
  () => (window.location.href = "https://lavka.yandex.ru/")
);

setInterval(() => btnPay.classList.toggle("pulsate"), 2000);
