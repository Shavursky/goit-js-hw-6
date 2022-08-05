const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let colorElem = document.querySelector('#ingredients');

const arrItem = ingredients.map(ingrEl => { 
  let newItem = document.createElement('li');
  newItem.textContent = ingrEl;
  return newItem;    
})
colorElem.append(...arrItem);
