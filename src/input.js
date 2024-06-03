var emailField = document.getElementById("email-field");
var emailError = document.getElementById("email-error");

function validateEmail () {
  if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "This is not a valid email. Please recheck your email";
    emailField.style.borderColor = "red";
    emailError.style.top = "120%";
    return false;
  }
  emailError.innerHTML = "";
  emailField.style.borderColor = "green";
  emailError.style.top = "100%";
  return true;
}
