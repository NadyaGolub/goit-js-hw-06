const totalItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${ totalItem.length }`);

const animals = document.querySelector(`h2`);

console.log(`Category: ${animals.textContent}`);

const animalsEl = document.querySelectorAll(`ul`)[1];

const animalsElements = animalsEl.querySelectorAll(`li`);
console.log(`Elements: ${animalsElements.length}`);

const products = document.querySelectorAll(`h2`)[1];

console.log(`Category: ${products.textContent}`);
const productsEl = document.querySelectorAll(`ul`)[2];

const productsElements = productsEl.querySelectorAll(`li`);
console.log(`Elements: ${productsElements.length}`);

const technologies = document.querySelectorAll(`h2`)[2];

console.log(`Category: ${technologies.textContent}`);

const technologiesEl = document.querySelectorAll(`ul`)[3];

const technologiesElements = technologiesEl.querySelectorAll(`li`);
console.log(`Elements: ${technologiesElements.length}`);

