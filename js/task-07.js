
const inputSize = document.querySelector(`#font-size-control`);
const inputText = document.querySelector(`#text`);

inputSize.addEventListener(`input`, inputRange);

function inputRange() {
    inputText.style.fontSize = `${ inputSize.value }px`;
}