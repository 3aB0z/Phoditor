<<<<<<< HEAD
document.getElementById("username").addEventListener("focusout", () => {
=======
function usernameVerification() {
    let result;
>>>>>>> b032b513a243013e5bf01c5d439be981a80b9bcf
    let username = document.getElementById("username");
    let usernameInfo = document.getElementById("username-info");
    let acceptedValue = document.getElementById("accepted-value");
    let emptyValue = document.getElementById("empty-value");
    let shortValue = document.getElementById("short-value");
    let longValue = document.getElementById("long-value");
    if(username.value.length === 0) {
        username.style.borderColor = "rgb(255, 0, 76)";
        usernameInfo.style.display = "none";
        acceptedValue.style.display = "none";
        emptyValue.style.display = "block";
        shortValue.style.display = "none";
        longValue.style.display = "none";
    } else if(username.value.length >= 3 && username.value.length <= 20) {
        username.style.borderColor = "rgb(0, 188, 69)";
        usernameInfo.style.display = "none";
        acceptedValue.style.display = "block";
        emptyValue.style.display = "none";
        shortValue.style.display = "none";
        longValue.style.display = "none";
<<<<<<< HEAD
=======
        // Return username validation
        result = true;
>>>>>>> b032b513a243013e5bf01c5d439be981a80b9bcf
    } else if(username.value.length > 0 && username.value.length < 3) {
        username.style.borderColor = "rgb(255, 0, 76)";
        usernameInfo.style.display = "none";
        acceptedValue.style.display = "none";
        emptyValue.style.display = "none";
        shortValue.style.display = "block";
        longValue.style.display = "none";
    } else if(username.value.length > 20) {
        username.style.borderColor = "rgb(255, 0, 76)";
        usernameInfo.style.display = "none";
        acceptedValue.style.display = "none";
        emptyValue.style.display = "none";
        shortValue.style.display = "none";
        longValue.style.display = "block";
    }
<<<<<<< HEAD
})

document.getElementById("submit").addEventListener("click", () => {
    let email = document.getElementById("email");
    let invalidEmail = document.getElementById("invalid-email");
    let validEmail = document.getElementById("valid-email");
    let password = document.getElementById("password");
    let invalidPassword = document.getElementById("invalid-password");
    let validPassword = document.getElementById("valid-password");
    let passwordInfo = document.getElementById("password-info");
    if(email.value.length === 0) {
        email.style.borderColor = "rgb(255, 0, 76)";
        invalidEmail.style.display = "block";
        validEmail.style.display = "none";
    } else if(email.value.length >= 1) {
        email.style.borderColor = "rgb(0, 188, 69)";
        invalidEmail.style.display = "none";
        validEmail.style.display = "block";
    }

    if(password.value.length === 0) {
        password.style.borderColor = "rgb(255, 0, 76)";
        invalidPassword.style.display = "block";
        validPassword.style.display = "none";
        passwordInfo.style.display = "none";
    } else if(password.value.length >= 1) {
        password.style.borderColor = "rgb(0, 188, 69)";
        invalidPassword.style.display = "none";
        validPassword.style.display = "block";
        passwordInfo.style.display = "none";
    }
});


// document.getElementById("submit").addEventListener("click", (e) => {
//     e.preventDefault();
//     let username = document.getElementById("username");
//     if(username.value === "") {
//         document.querySelector(".username-input").style.borderColor = "rgb(255, 0, 76)";
//     }
//     else if(username.value.length >= 3 && username.value.length <= 20) {
//         document.querySelector(".username-input").style.borderColor = "rgb(0, 188, 69)";
//     }
// })

=======
    return result;
}
>>>>>>> b032b513a243013e5bf01c5d439be981a80b9bcf

function emailValidation() {
    let pattern = /[a-z|1-9]{1,}@gmail.com$/g;
    let result = pattern.test(email.value.toLowerCase());
    return result;
}
function emailVerification() {
    let result;
    let email = document.getElementById("email");
    let invalidEmail = document.getElementById("invalid-email");
    let validEmail = document.getElementById("valid-email");
    // Email verification
    if(emailValidation()) {
        // Valid email
        email.style.borderColor = "rgb(0, 188, 69)";
        invalidEmail.style.display = "none";
        validEmail.style.display = "block";
        // Return email validation
        result = true;
    }else {
        // Invalid email
        email.style.borderColor = "rgb(255, 0, 76)";
        invalidEmail.style.display = "block";
        validEmail.style.display = "none";
    }
    return result;
}

<<<<<<< HEAD


=======
function passwordValidation() {
    let result;
    let numberValidation = /[1-9]/g.test(password.value);
    let symbolValidation = /\W/g.test(password.value);
    if(numberValidation && symbolValidation) {
        result = true;
    }
    return result;
}
function passwordVerification() {
    let result;
    let password = document.getElementById("password");
    let invalidPassword = document.getElementById("invalid-password");
    let validPassword = document.getElementById("valid-password");
    let passwordInfo = document.getElementById("password-info");
    // Password verification
    if(passwordValidation()) {
        // Valid password
        password.style.borderColor = "rgb(0, 188, 69)";
        invalidPassword.style.display = "none";
        validPassword.style.display = "block";
        passwordInfo.style.display = "none";
        // Return password validation
        result = true;
    }else {
        // Invalid password
        password.style.borderColor = "rgb(255, 0, 76)";
        invalidPassword.style.display = "block";
        validPassword.style.display = "none";
        passwordInfo.style.display = "none";
    }
    return result;
}

function dataVerification() {
    if(usernameVerification() && emailVerification() && passwordVerification()) {
        return true;
    }
}
>>>>>>> b032b513a243013e5bf01c5d439be981a80b9bcf

document.getElementById("username").addEventListener("focusout", usernameVerification);

document.getElementById("email").addEventListener("focusout", emailVerification);

document.getElementById("password").addEventListener("focusout", passwordVerification);

document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    usernameVerification();
    emailVerification();
    passwordVerification();
    if(dataVerification()) {
        event.submit();
    }
});
