const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", chekInputFill);
function chekInputFill(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled in");
  }
  const userData = {
    Email: email.value,
    Password: password.value,
  };
  console.log(userData);
  event.currentTarget.reset();
}
