import "./style.css";

const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

email.addEventListener("focusout", function (event) {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError("E-mail address", email, emailError);
  }
});

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");

country.addEventListener("focusout", function (event) {
  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.className = "error";
  } else {
    showError("Country", country, countryError);
  }
});

const zip = document.getElementById("zip");
const zipError = document.querySelector("#zip + span.error");

zip.addEventListener("focusout", function (event) {
  if (zip.validity.valid) {
    zipError.textContent = "";
    zipError.className = "error";
  } else {
    showError("Zip-code", zip, zipError);
  }
});

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

password.addEventListener("focusout", function (event) {
  if (passwordConfirm.value.length > 0 && password.value.length > 0) {
    if (passwordConfirm.value != password.value) {
      password.setCustomValidity("Password Must be Matching.");
      passwordError.textContent = "Passwords need to match.";
      passwordError.className = "error active";
    } else if (passwordConfirm.value === password.value) {
      password.setCustomValidity("");
      passwordError.textContent = "";
      passwordError.className = "error";
    }
  }
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showError("Password", password, passwordError);
  }
});

const passwordConfirm = document.getElementById("password_confirm");
const passwordConfirmError = document.querySelector(
  "#password_confirm + span.error"
);

passwordConfirm.addEventListener("focusout", function (event) {
  if (passwordConfirm.value != password.value) {
    passwordConfirm.setCustomValidity("Passwords need to match.");
    passwordConfirmError.textContent = "Passwords need to match.";
    passwordConfirmError.className = "error active";
  } else if (passwordConfirm.value === password.value) {
    passwordConfirm.setCustomValidity("");
    passwordConfirmError.textContent = "";
    passwordConfirmError.className = "error";
  }
  if (passwordConfirm.validity.valid) {
    passwordConfirmError.textContent = "";
    passwordConfirmError.className = "error";
  } else {
    showError("Password", passwordConfirm, passwordConfirmError);
  }
});

form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    showError("E-mail address", email, emailError);
    event.preventDefault();
  }
  if (!zip.validity.valid) {
    showError("Zip-code", zip, zipError);
    event.preventDefault();
  }
  if (!country.validity.valid) {
    showError("Country", country, countryError);
    event.preventDefault();
  }
  if (!password.validity.valid) {
    showError("Password", password, passwordError);
    event.preventDefault();
  }
  if (!passwordConfirm.validity.valid) {
    showError("Password", passwordConfirm, passwordConfirmError);
    event.preventDefault();
  }
});

function showError(errorTitle, formElement, errorElement) {
  if (formElement.validity.valueMissing) {
    errorElement.textContent = `You need to enter a ${errorTitle}`;
  } else if (formElement.validity.typeMismatch) {
    errorElement.textContent = `Entered value needs to be a ${errorTitle}`;
  } else if (formElement.validity.tooShort) {
    errorElement.textContent = `${errorTitle} should be at least ${formElement.minLength} characters; you entered ${formElement.value.length}.`;
  }
  errorElement.className = "error active";
}
