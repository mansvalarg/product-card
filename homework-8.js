import { products } from "./products.js";

// 1. Как и в прошлых задания - создаем отдельный файл для 
// homework-8 и подключаем его в HTML с атрибутом type = module 
// (что бы работали импорты)

// 2. Создаем файл js, где будет хранится массив объектов, 
// которые представляют собой продуктовые карточки из вёрстки 
// (имейте ввиду, UI-данные не относятся к данным продукта. Гуглите). 
// Вам нужно описать полностью объект и продублировать его 
// для всех карточек и после импортировать в homework-8 
// для дальнейшей работы с ним.

// 3. По аналогии из лекции — создать и реализовать шаблон 
// для продуктовых карточек.  
// (Посмотрите сразу задание 5)

const productTemplate = document.getElementById("product-template");
const productList = document.getElementById("product-list");

function renderProducts(productsToRender) {
  productList.innerHTML = "";
  productsToRender.forEach((product) => {
    const productClone = productTemplate.content.cloneNode(true);
    productClone.querySelector(".product-image").src = `images/diamaint/${product.img}.png`;
    productClone.querySelector(".product-category").textContent = product.skinType;
    productClone.querySelector(".product-name").textContent = product.name;
    productClone.querySelector(".product-description").textContent = product.description;
    const compoundList = productClone.querySelector(".product-compound");
    product.ingredients.forEach((item) => {
      const li = document.createElement("li");
      li.className = "product-compound-item";
      li.textContent = item;
      compoundList.appendChild(li);
    });
    productClone.querySelector(".product-price").textContent =
      `${product.price} \u20BD`;
    productList.appendChild(productClone);
  });
}

// 4. Используя метод .reduce(), получить массив объектов, 
// где ключем является название продукта, а значением - его описание

const productDescriptions = products.reduce((acc, product) => {
  acc.push({ [product.name]: product.description });
  return acc;
}, []);

console.log(productDescriptions)

// 5*. Реализовать функцию, которая при старте страницы выводит 
// сообщение (через функцию prompt) "Сколько карточек отобразить? 
// От 1 до 5" и в зависимости от результата - 
// будет выводить введенное количество. 
// Должна быть защита от ввода других значений (проверка if). 
// То-есть: у нас будет 2 функции, одна возвращает количество карточек, 
// которое нужно ввести, другая - 
// рендерить эти карточки (принимая массив аргументом)

function getCardQuantity() {
  const input = 5 // prompt("Сколько карточек отобразить? От 1 до 5");
  const quantity = parseInt(input);
  if (quantity >= 1 && quantity <= 5) {
    return quantity;
  } 
  alert ("Число не введено или введено неправильное число. Перезагрузите страницу и введите число от 1 до 5.");
  return 0;
};

const count = getCardQuantity();
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products.slice(0, count));
});
