const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");
input.addEventListener("blur", inputVerification);
function inputVerification() {
  if (+input.dataset.length === +input.value.length) {
    input.classList.remove(`invalid`);
    input.classList.add("valid");
  } else {
    input.classList.add(`invalid`);
  }
}
