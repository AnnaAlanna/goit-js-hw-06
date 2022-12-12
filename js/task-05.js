const input = document.querySelector('#name-input');
const label = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange (event) {
    const inputText = event.currentTarget.value;
       label.textContent = inputText;
    if (!event.currentTarget.value) {
        label.textContent = 'Anonymous';
    }
}

