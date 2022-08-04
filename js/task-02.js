const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let colorElem = document.querySelector('#ingredients');
ingredients.forEach(ingrEl => { 
  let newItem = document.createElement('li');
  newItem.textContent = ingrEl;
  colorElem.appendChild(newItem);  
})