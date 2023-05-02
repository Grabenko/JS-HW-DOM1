const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
const ulEl = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  return li;
});

ulEl.append(...elements);
