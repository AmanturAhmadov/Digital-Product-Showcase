const signUpForm = document.getElementById("signUpForm");
const signUpUserEmailInput = document.getElementById("signUpUserEmail");
const signUpUserPasswordInput = document.getElementById("signUpUserPassword");

signUpForm.addEventListener("submit", function(event){

    event.preventDefault();

    const signUpEmail = signUpUserEmailInput.value;
    const signUpPassword = signUpUserPasswordInput.value;

    if(signUpEmail.trim() === "" || signUpPassword.trim() === ""){
        alert("Please fill out both fields.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("porscheUser")) || [];
    const userExist = users.some(user => user.userEmail === signUpEmail);
    if(userExist){
        alert("An account with this E-Mail already exists.");
        return;
    }

    /**  PACK A TEST ACCOUNT
    const testAccount = {
        userEmail: signUpEmail,
        userPassword: signUpPassword
    } **/

    users.push(
        {
            userEmail: signUpEmail,
            userPassword: signUpPassword
        }
    );

    localStorage.setItem("porscheUser", JSON.stringify(users));

    alert("You're signed up!");
    signUpForm.reset();
    window.location.href = "sign_in.html";

});

