const listCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${listCategories.length}`);

const item = [...categories.children];

for (let i = 0; i < item.length; i +=1) {
    // const nameCategorie = item[i].querySelector('h2').textContent;
    // const countItem = item[i].querySelectorAll('li').length;
    // console.log(`Category: ${nameCategorie}`);
    // console.log(`Elements : ${countItem}`);
    console.log(`Category: ${item[i].querySelector('h2').textContent}`);
    console.log(`Elements : ${item[i].querySelectorAll('li').length}`);
}
