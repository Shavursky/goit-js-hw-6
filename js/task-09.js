function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const div = document.querySelector('.widget');
const span = document.querySelector('.color');
const but = document.querySelector('.change-color');

but.addEventListener('click', () => {
  let randomColor = getRandomHexColor()
  document.body.style.background = randomColor;
  span.textContent = randomColor;  
});
