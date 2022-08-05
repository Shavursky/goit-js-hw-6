const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormEl);

function onFormEl (event) {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;

    
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
      }
      console.log(`email: ${email.value}, Password: ${password.value}`);
      event.currentTarget.reset();
    }




    // const formData = new FormData(event.currentTarget);
    // console.log(formData)

//     formData.forEach((name, value) => {
//         console.log('onFormEl -> name', name)
//         console.log('onFormEl -> value', value);
//         if (name === '') {
//             return alert('Не заповнена форма!')
//         }        
//     });
//     form.reset();
// }



// formData.forEach((name, value) => {
//     console.log('onFormEl -> name', name)
//     console.log('onFormEl -> value', value);
//     if (name === '') {
//         return alert('Не заповнена форма!')
//     }        
// });
// form.reset();