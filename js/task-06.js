const input = document.querySelector('#validation-input');

// input.addEventListener('blur', onInputBlur);
// function onInputBlur() {
//     console.log('blur');
// }

// input.addEventListener('input', onInputChange);
// function onInputChange(event) {
//     const inputText = event.currentTarget.value;
//    console.log(inputText.length);
//     // return inputText;
// }

input.addEventListener('input', checkNumberOfSymbol);
function checkNumberOfSymbol() {
  if (input.value.length !== Number(input.dataset.length)) {
    input.classList.add(`invalid`);
  } else input.classList.replace(`invalid`, `valid`);
}