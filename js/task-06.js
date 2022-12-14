const validInput = document.querySelector(`#validation-input`);

validInput.addEventListener(`blur`, (event) => {
  if (
    Number.parseInt(validInput.getAttribute(`data-length`)) ===
    validInput.value.length
  ) {
    validInput.classList.add(`valid`);
    validInput.classList.remove(`invalid`);

    console.log(validInput.classList);
  } else {
    validInput.classList.add(`invalid`);
validInput.classList.remove(`valid`);
  }
});
