const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const elementsOfList = ingredients.map(ingredient => {
  const eachLi = document.createElement('li');
  eachLi.textContent= ingredient;
  eachLi.classList.add('item');
  console.log(eachLi);
  
  return eachLi;
});

console.log(elementsOfList);
listEl.append(...elementsOfList);
