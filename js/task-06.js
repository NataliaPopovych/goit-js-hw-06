const inputElement = document.querySelector(`#validation-input`);
const lengthElement = Number(inputElement.dataset.length);

inputElement.addEventListener(`blur`, (event) => {
    if(event.currentTarget.value.length === lengthElement){
        inputElement.classList.remove("invalid");
        inputElement.classList.add("valid");
    }else {
        inputElement.classList.remove("valid");
        inputElement.classList.add("invalid");
    };
});