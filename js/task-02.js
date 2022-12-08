const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`ul#ingredients`);

const elements = ingredients.map(option => {
  const li = document.createElement(`li`);
  li.textContent = option;
  li.classList.add(`item`);
  return li;
});

console.log(elements);
list.append(...elements);