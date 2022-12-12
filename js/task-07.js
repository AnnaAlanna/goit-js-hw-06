const input = document.querySelector('#font-size-control');
let output = document.querySelector('#text');

input.addEventListener("input", changeSizeText);


function changeSizeText(event) {
  output.style.fontSize = event.currentTarget.value + "px";
}