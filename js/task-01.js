const totalItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${ totalItems.length }`);

totalItems.forEach((totalItem) => {
  
    const category = totalItem.querySelector(`h2`);

    const categoryLength = totalItem.querySelectorAll(`li`).length;

    console.log(`Category: ${category.textContent}`);


    console.log(`Elements: ${categoryLength}`);
});
