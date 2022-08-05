
const input = document.querySelector('#validation-input');
input.addEventListener('blur', numData);

function numData (event) {
    const el = event.currentTarget;

    if (Number(el.dataset.length) === el.value.length) {           
        el.classList.remove('invalid');
       return el.classList.add('valid'); 
    }         
        el.classList.remove('valid')
        el.classList.add('invalid');        
}
