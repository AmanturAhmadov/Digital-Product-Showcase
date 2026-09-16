// 1. SELECT THE ELEMENTS FROM HTML AND TRANSLATE IT AS JAVASCRIPT OBJECT
const form = document.getElementById("complaintForm");
const userEmailInput = document.getElementById("userEmail");
const userNameInput = document.getElementById("userName");
const responseInput = document.getElementById("response");

// 2. LISTEN FOR THE FORM SUBMIT
form.addEventListener("submit", function(event){

    // 3. STOP THE PAGE FROM RELOADING
    event.preventDefault();

    //4. GRAB THE VALUE FROM THE INPUTS
    const email = userEmailInput.value;
    const name = userNameInput.value;
    const response = responseInput.value;

    // 5. REACT TO IT (alert message)
    alert("Submitted");

    // 6. RESET THE FORM FIELDS
    form.reset();

});