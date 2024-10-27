document.getElementById("username").addEventListener("focusout", () => {
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









