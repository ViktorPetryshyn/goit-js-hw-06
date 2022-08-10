const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsListEl = document.querySelector("#ingredients");
const createOneItem = ingredients.map((item) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.classList = "item";
  ingredientsItemEl.textContent = item;
  return ingredientsItemEl;
});
ingredientsListEl.append(...createOneItem);
console.log("ingredListLiEL", createOneItem);
