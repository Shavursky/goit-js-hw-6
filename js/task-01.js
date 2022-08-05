//Завдання 1

const itemCategories = document.querySelectorAll('#categories .item');
console.log("Number of categories: ", itemCategories.length);

// const catArray = [...itemCategories];

itemCategories.forEach(category=>{
    const h2 = category.querySelector("H2");
    const innerItems = category.querySelectorAll("li");
    console.log("Category: ", h2.textContent);
    console.log("Elements: ", innerItems.length);
});



