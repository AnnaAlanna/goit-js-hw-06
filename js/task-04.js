const actions = document.querySelectorAll('#counter button');
let counterValue = 0;
const decrementBtn = actions[0];
const incrementBtn = actions[1];

decrementBtn.addEventListener('click', onDecrementButtonCkick);
incrementBtn.addEventListener('click', onIncrementButtonCkick);

function onIncrementButtonCkick() {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
    console.log(counterValue);
}
function onDecrementButtonCkick() {
    counterValue -=1;
    document.querySelector('#value').textContent = counterValue;
    console.log(counterValue);
}



