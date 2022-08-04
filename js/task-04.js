let decrem = document.querySelector('#counter button[data-action="decrement"]');
let increm = document.querySelector('#counter button[data-action="increment"]');
let val = document.querySelector('#value');

// console.log(decrem.dataset.action)


decrem.addEventListener('click', () => {
    let counterValue = Number(val.textContent);
    counterValue -= 1;
    if (counterValue === -1) {
        return;
    }
    val.textContent = counterValue;   
    console.log(val)
})
increm.addEventListener('click', () => {
    let counterValue = Number(val.textContent);
    counterValue += 1;
    val.textContent = counterValue;   
    console.log(val)
})