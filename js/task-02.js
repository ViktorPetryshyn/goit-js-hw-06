const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsListEl = document.querySelector("#ingredients");
ingredients.map((item) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.classList = "item";
  ingredientsItemEl.textContent = item;
  ingredientsListEl.append(ingredientsItemEl);
});
console.log("ingredListLiEL", ingredientsItemEl);
