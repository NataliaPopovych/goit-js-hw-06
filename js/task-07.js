const inputElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');
 inputElement.addEventListener('input', () => {
    textElement.style = `font-size: ${inputElement.value}px`;
 })