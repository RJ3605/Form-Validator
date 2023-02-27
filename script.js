const form = document.querySelector("#form");
const password1El = document.querySelector("#password1");
const password2El = document.querySelector("#password2");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // Using Contraint API
  isValid = form.checkValidity();
  // Style main message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "rgb(248, 58, 58)";
    messageContainer.style.borderColor = "rgb(248, 58, 58)";
    return;
  }
  // Check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "rgb(109, 246, 148)";
    password2El.style.borderColor = "rgb(109, 246, 148)";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "rgb(248, 58, 58)";
    messageContainer.style.borderColor = "rgb(248, 58, 58)";
    password1El.style.borderColor = "rgb(248, 58, 58)";
    password2El.style.borderColor = "rgb(248, 58, 58)";
    return;
  }
  // If form is valid and passwords mathc
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered!";
    message.style.color = "rgb(109, 246, 148)";
    messageContainer.style.borderColor = "rgb(109, 246, 148)";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  //Do something with user data
  console.log(user);
}

// Process Form Data
function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  //sumbit Data if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener("submit", processFormData);
