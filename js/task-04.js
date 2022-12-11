const button = {
  subtract: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  sum: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

 button.sum.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  button.sum.textContent = counterValue;
};

button.subtract.addEventListener("click", increment);
button.add.addEventListener("click", decrement);