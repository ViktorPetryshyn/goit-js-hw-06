let counterValue = 0;
const decrementButtnEl = document.querySelector('[data-action="decrement"]');
const incrementButtnEl = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");
const decrClick = decrementButtnEl.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
const incrClick = incrementButtnEl.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
value.textContent = counterValue;
