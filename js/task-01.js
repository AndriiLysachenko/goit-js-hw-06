
const listCategories = document.querySelectorAll('.item');
//const listCategories = document.querySelector('#categories').children;
console.log('Number of categories:', listCategories.length);

for (const category of listCategories) {
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.lastElementChild.children.length);
};