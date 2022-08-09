function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanValueColor = document.querySelector(".color");
buttonEl.addEventListener("click", getBodyColorOnClick);
function getBodyColorOnClick(event) {
  event.preventDefault();
  bodyEl.style.backgroundColor = getRandomHexColor();
  const newBodycolor = getRandomHexColor();
  spanValueColor.textContent = newBodycolor;
}
