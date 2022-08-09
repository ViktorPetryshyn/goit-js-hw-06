const inputEl = document.querySelector("#name-input");
const userNameEl = document.querySelector("#name-output");
const inputChange = (event) => {
  if (event.currentTarget.value === "") {
    return (userNameEl.textContent = "Anonymous");
  }
  userNameEl.textContent = event.currentTarget.value;
};
inputEl.addEventListener("input", inputChange);
