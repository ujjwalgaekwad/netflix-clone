const emailAdd = document.getElementById("email");
const passwordAdd = document.getElementById("password");
const emailParagraph = document.getElementById("email-para");
const passwordParagraph = document.getElementById("password-para");
const signupButton = document.getElementById("signup-btn");
const useSigninCodeButton = document.getElementById("bottom-btn");
const signinCodeParagraph = document.getElementById("singin-code");

function validation() {
    let emailAddress = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    if (emailAddress == " " || password == "") {
        emailParagraph.style.display = "block";
        passwordParagraph.style.display = "block";
        emailAdd.style.border = "1.5px solid #EB3942"
        passwordAdd.style.border = "1.5px solid #EB3942"
        emailParagraph.innerText = "Please enter a valid email address or phone number";
        emailParagraph.style.color = "#EB3942";
        emailParagraph.style.fontSize = "0.8rem";
        emailParagraph.style.textAlign = "start";
        passwordParagraph.innerText = "Your password must contain between 4 and 60 characters.";
        passwordParagraph.style.color = "#EB3942";
        passwordParagraph.style.fontSize = "0.8rem";
        passwordParagraph.style.textAlign = "start";
        return false;

    }
    else if (emailAddress == email) {
        passwordParagraph.innerText = "Your password must contain between 4 and 60 characters.";
    }

    else if (emailAddress == "" || emailPassword == password) {
        emailParagraph.innerText = "Please enter a valid email address or phone number";
    }

    else if (emailAddress == email || emailPassword == password) {
        window.location = "index.html";
    }

    else if (emailAddress !== email) {
        emailParagraph.innerText = "Invalid email please check";
    }

    else if (emailPassword !== password) {
        passwordParagraph.innerText = "Invalid password";
    }
    else {
        true;
    }
}

signupButton.addEventListener("click", () => {
    validation();
})

//use sign-in code
function signInCode() {
    passwordAdd.style.display = "none";
    passwordParagraph.style.display = "none";
    signupButton.innerText = "Send sign-in code";
    useSigninCodeButton.innerText = "Use password";
    signinCodeParagraph.innerText = "Message and data rates my apply";
    signinCodeParagraph.style.textAlign = "center";
    signinCodeParagraph.style.fontSize = "0.5rem";
    signinCodeParagraph.style.color = "gray";
}
useSigninCodeButton.addEventListener("click", () => {
    signInCode();
})

//LearnMoreClass
const learnMoreButton = document.getElementsByClassName("learn-more");
const learnMoreParagraph = document.getElementsByClassName("learn-more-paragraph");

learnParagraph()
learnMoreButton.addEventListener("click", () => {
    
})