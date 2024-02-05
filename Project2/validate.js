function validateForm() {
  document.getElementById("validationForm").onsubmit = function (event) {
    if (!nameChanged() && !majorChanged() && !minorChanged()) {
      event.preventDefault();
      return false;
    }

    document.getElementById(
      "nameHeader"
    ).innerHTML = `<strong>Student: </strong>${nameInput.value}`;
    document.getElementById(
      "majorHeader"
    ).innerHTML = `<strong>Major: </strong>${majorInput.value}`;
    document.getElementById(
      "minorHeader"
    ).innerHTML = `<strong>Minor: </strong>${minorInput.value}`;

    return true;
  };
}

let regex = /^[a-zA-Z,-]*$/;

function nameChanged() {
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");

  if (!regex.test(nameInput.value)) {
    nameError.style.display = "inline-block";
    return false;
  } else {
    nameError.style.display = "none";
    document.getElementById(
      "nameHeader"
    ).innerHTML = `<strong>Student: </strong>${nameInput.value}`;
  }
}

function majorChanged() {
  const majorInput = document.getElementById("major");
  const majorError = document.getElementById("majorError");

  if (!regex.test(majorInput.value)) {
    //emailError.innerHTML = "Please enter a valid email address.";
    majorError.style.display = "inline-block";
    return false;
  } else {
    majorError.style.display = "none";
    document.getElementById(
      "majorHeader"
    ).innerHTML = `<strong>Major: </strong>${majorInput.value}`;
  }
}

function minorChanged() {
  const minorInput = document.getElementById("minor");
  const minorError = document.getElementById("minorError");

  if (!regex.test(minorInput.value)) {
    //emailError.innerHTML = "Please enter a valid email address.";
    minorError.style.display = "inline-block";
    return false;
  } else {
    minorError.style.display = "none";
    document.getElementById(
      "minorHeader"
    ).innerHTML = `<strong>Minor: </strong>${minorInput.value}`;
  }
}

document.addEventListener("DOMContentLoaded", validateForm());

