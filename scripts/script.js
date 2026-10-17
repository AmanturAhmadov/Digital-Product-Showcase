// 1. SELECT THE ELEMENTS FROM HTML AND TRANSLATE IT AS JAVASCRIPT OBJECT
const form = document.getElementById("complaintForm");
const userEmailInput = document.getElementById("userEmail");
const userNameInput = document.getElementById("userName");
const responseInput = document.getElementById("response");

// 2. LISTEN FOR THE FORM SUBMIT
form.addEventListener("submit", function(event){

    // 3. STOP THE PAGE FROM RELOADING
    event.preventDefault();

    // --- AUTHORIZATION CHECK
    const currentUserTag = JSON.parse(localStorage.getItem("currentUser"));

    if(!currentUserTag){
        alert("Access denied, you must be signed in to submit a complaint.");
        window.location.href = "sign_in.html";
        return;
    }
    // ---

    if(currentUserTag.userEmail){
        userEmailInput.value = currentUserTag.userEmail;
    }

    //4. GRAB THE VALUE FROM THE INPUTS
    const email = userEmailInput.value;
    const name = userNameInput.value;
    const response = responseInput.value;

    // 4.1. VALIDATION CHECK
    if(email.trim() === "" || name.trim() === "" || response.trim() === ""){
        alert("Please fill out all fields.");
        return;
    }

    // 5. REACT TO IT (alert message)
    alert(`Submitted! Thank you ${name}`);

    // 6. RESET THE FORM FIELDS
    // form.reset();
    userNameInput.value = "";
    responseInput.value = "";

});