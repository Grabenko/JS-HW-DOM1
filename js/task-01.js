const categoriesList = document.querySelector('#categories');
console.log(categoriesList);
const categoriesItems = categoriesList.querySelectorAll('.item');
console.log(`У списку ${categoriesItems.length} категорії`);
categoriesItems.forEach(item => {
    const categoriesName = item.querySelector('h2').textContent
    const categoriesItem = item.querySelectorAll('li').length
    console.log(`Категорія ${categoriesName}. Кількість елементів: ${categoriesItem}.`);
})
