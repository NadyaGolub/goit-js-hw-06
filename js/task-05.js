const elements = {
    input: document.querySelector(`#name-input`),
    span: document.querySelector(`#name-output`),
}

elements.input.addEventListener(`input`, onInputChange);

function onInputChange (event) {
    console.log(event.currentTarget.value);

    if (!event.currentTarget.value) {
        elements.span.textContent = `Anonymous`;
    }

    else {
        elements.span.textContent = event.currentTarget.value;
    }

       
}




