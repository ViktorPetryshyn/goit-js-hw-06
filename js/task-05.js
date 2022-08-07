const input = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");
const inputChange = (event) => {
  if (event.currentTarget.value === "") {
    return (userName.textContent = "Anonymous");
  }
  userName.textContent = event.currentTarget.value;
};
input.addEventListener("input", inputChange);
