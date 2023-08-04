console.log("Javascript link was successful. Yay.");
const form = document.querySelector("#sign-up");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passError = document.querySelector("#password-error");
const emailError = document.querySelector("#email-error");
const userNameError = document.querySelector("#username-error");
const modal = document.querySelector("#sign-up-modal");
const closeModal = document.querySelector(".modal-close");
const inputs = document.querySelectorAll("input");
const btn = document.querySelector(".open-sign-in");

function modalAction(selector) {
  const modal = document.querySelector(selector);
  const closeBtn = modal.querySelector(".modal-close");
  modal.classList.add("open");
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
  });
}

function isUserNameValid() {
  if (/^\s*$/.test(username.value)) {
    userNameError.innerText = "username is required";
    username.classList.remove("correct");
    username.classList.add("error");
    return false;
  } else {
    userNameError.innerText = "";
    username.classList.remove("error");
    username.classList.add("correct");
    return true;
  }
}

function isEmailValid() {
  if (/^\s*$/.test(email.value)) {
    emailError.innerText = "email is required";
    email.classList.remove("correct");
    email.classList.add("error");
    return false;
  } else if (!/@gmail.com$/.test(email.value)) {
    emailError.innerText = "email must be gmail";
    email.classList.remove("correct");
    email.classList.add("error");
    return false;
  } else {
    emailError.innerText = "";
    email.classList.remove("error");
    email.classList.add("correct");
    return true;
  }
}
function isPasswordValid() {
  if (password.value.length < 8) {
    password.classList.remove("correct");
    password.classList.add("error");
    passError.innerText = "password must be at least 8 characters long";
    return false;
  } else {
    passError.innerText = "";
    password.classList.remove("error");
    password.classList.add("correct");
    return true;
  }
}
username.addEventListener("input", isUserNameValid);
email.addEventListener("input", isEmailValid);
password.addEventListener("input", isPasswordValid);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isUNValid = isUserNameValid();
  const isEValid = isEmailValid();
  const isPValid = isPasswordValid();
  if (isUNValid && isEValid && isPValid) {
    inputs.forEach((el) => el.classList.remove("correct"));
    modalAction("#sign-up-modal");
  }
});

btn.addEventListener("click", () => {
  modalAction("#sign-up-modal");
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const personalNumberInput = document.getElementById("personal_number");
    const mobileNumberInput = document.getElementById("mobile_number");
    const jobDescriptionInput = document.getElementById("job_description");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      validatePersonalNumber();
      validateMobileNumber();
      validateJobDescription();
    });

    function validatePersonalNumber() {
      const personalNumber = personalNumberInput.value.trim();
      const personalNumberError = document.getElementById("personal_number_error");

      if (personalNumber === "") {
        personalNumberError.textContent = "Personal Number is mandatory";
      } else if (!/^\d{11}$/.test(personalNumber)) {
        personalNumberError.textContent = "Personal Number must contain 11 digits";
      } else {
        personalNumberError.textContent = "";
      }
    }

    function validateMobileNumber() {
      const mobileNumber = mobileNumberInput.value.trim();
      const mobileNumberError = document.getElementById("mobile_number_error");

      if (mobileNumber === "") {
        mobileNumberError.textContent = "Mobile Number is mandatory";
      } else if (!/^\d{9}$/.test(mobileNumber)) {
        mobileNumberError.textContent = "Mobile Number must contain 9 digits";
      } else {
        mobileNumberError.textContent = "";
      }
    }

    function validateJobDescription() {
      const jobDescription = jobDescriptionInput.value.trim();
      const jobDescriptionError = document.getElementById("job_description_error");

      if (jobDescription.length > 50) {
        jobDescriptionError.textContent = "Job Description cannot exceed 50 characters";
      } else {
        jobDescriptionError.textContent = "";
      }
    }

    // Add event listeners to trigger validation on input change
    personalNumberInput.addEventListener("input", validatePersonalNumber);
    mobileNumberInput.addEventListener("input", validateMobileNumber);
    jobDescriptionInput.addEventListener("input", validateJobDescription);
  });
