const listCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${listCategories.length}`);

const item = [...categories.children];
item.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Elements:', element.lastElementChild.childElementCount);
});

