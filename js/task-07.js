const sizeControlInput = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const changeRange = () => {
  text.style.fontSize = `${sizeControlInput.value}px`;
};
sizeControlInput.addEventListener("input", changeRange);
