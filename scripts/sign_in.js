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

    const users = JSON.parse(localStorage.getItem("porscheUser")) || [];

    if(users.length === 0){
        alert("No account found, please sign up first.");
        return;
    }

    const matchedUser = users.find(user => user.userEmail === email && user.userPassword === password);

    if(matchedUser){
        alert("You're signed in!");
        localStorage.setItem("currentUser", JSON.stringify(matchedUser))
        form.reset();
        window.location.href = "index.html";
    }
    else {
        alert("Incorrect E-Mail or password.");
    }

});

