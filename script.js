const button = document.querySelector("#claim-button");
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/;
button.addEventListener("click", function (event) {
  const form = document.querySelector(".claim-trial");
  const email = document.getElementById("email");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const password = document.getElementById("password");
  event.preventDefault();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  let isValid = true;

  if (!firstNameValue) {
    firstName.classList.add("error");
    isValid = false;
  } else {
    firstName.classList.remove("error");
  }

  if (!lastNameValue) {
    lastName.classList.add("error");
    isValid = false;
  } else {
    lastName.classList.remove("error");
  }

  if (!passwordValue) {
    password.classList.add("error");
    isValid = false;
  } else {
    password.classList.remove("error");
  }

  if (!emailValue || !emailPattern.test(emailValue)) {
    email.classList.add("error");
    isValid = false;
  } else {
    email.classList.remove("error");
  }

  if (isValid) {
    alert("Thank You!");
    //   form.reset();
  }
});
