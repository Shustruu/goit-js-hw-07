const liItem = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${liItem.length}`);

liItem.forEach((category) => {
  const liCategory = category.querySelector("h2").textContent;
  const liElements = category.querySelectorAll("ul li").length;

  console.log(`Category: ${liCategory}`);
  console.log(`Elements: ${liElements}`);
});