function validateForm() {
  document.getElementById("validationForm").onsubmit = function (event) {
    if (!nameChanged() && !majorChanged() && !minorChanged()) {
      event.preventDefault();
      return false;
    }

    document.getElementById("nameHeader")
      .innerHTML = `<b class="tag">Student</b> ${nameInput.value}`;
    document.getElementById("majorHeader")
      .innerHTML = `<b class="tag">Major</b> ${majorInput.value}`;
    document.getElementById("minorHeader")
      .innerHTML = `<b class="tag">Minor</b> ${minorInput.value}`;

    return true;
  };
}

function validateAndDisplay(inputId, label) {
  let errorId = inputId + "Error";
  let headerId = inputId + "Header";
  let regex = /^[a-zA-Z,-\s]*$/;
  
  let inputElement = document.getElementById(inputId);
  let errorElement = document.getElementById(errorId);

  if (!regex.test(inputElement.value)) {
    errorElement.style.display = "inline-block";
    return false;
  } else {
    errorElement.style.display = "none";
    document.getElementById(headerId).innerHTML = `<b class="tag">${label}</b> ${inputElement.value}`;
  }
}

function nameChanged() {
  validateAndDisplay("name", "Student");
}

function majorChanged() {
  validateAndDisplay("major", "Major");
}

function minorChanged() {
  validateAndDisplay("minor", "Minor");
}

document.addEventListener("DOMContentLoaded", validateForm());

