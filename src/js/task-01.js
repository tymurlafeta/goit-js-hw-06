const categoriesList = document.querySelector('ul#categories');

const items = categoriesList.querySelectorAll('li.item');

console.log('Number of categories:', items.length);

items.forEach((item) => {

  const categoryTitle = item.querySelector('h2').textContent;

  const categoryElements = item.querySelectorAll('li');

  console.log('Category:', categoryTitle);
  console.log('Elements:', categoryElements.length);
});