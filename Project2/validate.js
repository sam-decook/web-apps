document.getElementById("validateForm").onsubmit = function(event) {
    if(!brugelsIsSexy()) {
        event.preventDefault();
        return false;
    }
    return true;
};

function brugelsIsSexy(){
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(emailInput.value)) {
        //emailError.innerHTML = "Please enter a valid email address.";
        emailError.style.display = "block";
        return false;
    } else {
        emailError.style.display = "none";
    }
}









let form = document.getElementById("courseSearchForm");

function validateForm (event){
    let course = form.courseSearch.value;
}

form.addEventListener("submit", validateForm);