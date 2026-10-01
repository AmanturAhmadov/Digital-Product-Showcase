const form = document.getElementById("signInForm");
const userEmailInput = document.getElementById("userEmail");
const userPasswordInput = document.getElementById("userPassword");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const email = userEmailInput.value;
    const password = userPasswordInput.value;

    if(email.trim() === "" || password.trim() === ""){
        alert("Please fill out both fields.");
        return;
    }

    /** PACK A TEST ACCOUNT
    const testAccount = {
        userEmail: "test@gmail.com",
        userPassword: "111"
    }

    localStorage.setItem("testUser", JSON.stringify(testAccount));
    **/

    const savedUserData = localStorage.getItem("porscheUser");

    if(!savedUserData){
        alert("No account found, please sign up first.");
        return;
    }

    const savedUser = JSON.parse(savedUserData);

    if(savedUser.userEmail === email && savedUser.userPassword === password){
        alert("You're signed in!");
        form.reset();
        window.location.href = "index.html";
    }
    else {
        alert("Incorrect E-Mail or password.");
    }

});

