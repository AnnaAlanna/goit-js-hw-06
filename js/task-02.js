const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(ingredient => {
  const navEl = document.createElement('li');
  navEl.classList.add('item');
  navEl.textContent = ingredient;
  return navEl;
});

const ingredientList= document.querySelector('ul');
ingredientList.append(...elements);