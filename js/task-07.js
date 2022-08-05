const input = document.querySelector('#font-size-control')
const span = document.querySelector('#text')

input.addEventListener('input', rangeInput);

function rangeInput (event) {
    const el = event.currentTarget;
    span.style.fontSize = el.value + 'px';
}
