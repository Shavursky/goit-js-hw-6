function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divCreate = document.querySelector('#controls button[data-create]');
const divDestroy = document.querySelector('#controls button[data-destroy]');
const divInput = document.querySelector('#controls input');

const divBox = document.querySelector('#boxes');
 

function createBoxes(amount) { 
  let elLength = divBox.children.length; 
  for (let i = 0; i < amount; i += 1) {
    const el = document.createElement('div');
    let sum = 30 + (i + elLength) * 10;    
    console.log('sum', sum)
    el.style.height = sum + 'px';
    el.style.width = sum + 'px';
    el.style.backgroundColor = getRandomHexColor();
    divBox.appendChild(el);    
    }  
    
}

divCreate.addEventListener('click', () => {
  createBoxes(divInput.value);
})

function destroyBoxes() {
  divBox.textContent = '';
}
divDestroy.addEventListener('click', destroyBoxes);