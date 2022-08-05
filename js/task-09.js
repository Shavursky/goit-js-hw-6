function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const div = document.querySelector('.widget');
const span = document.querySelector('.color');
const but = document.querySelector('.change-color');

but.addEventListener('click', () => {
  document.body.style.background = getRandomHexColor();
  span.textContent = getRandomHexColor();  
})
