const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormEl);

function onFormEl (event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(formData)
    

    formData.forEach((name, value) => {
        console.log('onFormEl -> name', name)
        console.log('onFormEl -> value', value);
        if (name === '') {
            return alert('Не заповнена форма!')
        }        
    });
    form.reset();
}
