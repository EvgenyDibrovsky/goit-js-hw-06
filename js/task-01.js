const allItems = document.querySelectorAll(".item");
const allItemsQty = allItems.length;

console.log(`Number of categories: ${allItemsQty}`);

allItems.forEach((element) => {
  let elementTitle = element.querySelector("h2").textContent;

  let oneTitleElements = element.querySelectorAll("li");
  let oneTitleElemntsQty = oneTitleElements.length;

  console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${oneTitleElemntsQty}`);
});

// В HTML есть список категорий ul#categories.

// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).