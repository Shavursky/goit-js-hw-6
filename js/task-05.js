const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    span.textContent = event.currentTarget.value;
    console.log(span.textContent)
    if (span.textContent === "") {
        span.textContent = 'Anonymous';
    }
}
