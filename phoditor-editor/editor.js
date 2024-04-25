//Show & hide element with animation
let elementSwitcher = true;
function showHideElement(elementDisplayed,btnClicked) {
    if (elementSwitcher) {
        elementDisplayed.style.display = 'block';
        btnClicked.style.backgroundColor = 'rgb(206, 206, 206)';
        elementSwitcher = false;
    } else {
        elementDisplayed.style.display = 'none';
        btnClicked.style.backgroundColor = '';
        elementSwitcher = true;
    }
}

//Show profile image change
function showProfileImageChange() {
    document.getElementById('change-profile-img').style.opacity = 1;
    document.getElementById('change-profile-img-image').style.opacity = 1;
}

//Hide profile image change
function hideProfileImageChange() {
    document.getElementById('change-profile-img').style.opacity = 0;
    document.getElementById('change-profile-img-image').style.opacity = 0;
}

//Use new profile image
document.getElementById("profile-upload").addEventListener("change", function useNewProfileImage() {
    let profileImg;
    let reader = new FileReader();
    reader.readAsDataURL(document.getElementById("profile-upload").files[0]);
    reader.addEventListener("load", () => {
        profileImg = reader.result;
        document.getElementById("profile-img").setAttribute("src", profileImg);
        document.getElementById("profile-image").setAttribute("src", profileImg);
    });
});

//Use new image
document.getElementById("upload-btn").addEventListener("change", function useNewProfileImage() {
    let img;
    let reader = new FileReader();
    reader.readAsDataURL(document.getElementById("upload-btn").files[0]);
    reader.addEventListener("load", () => {
        img = reader.result;
        document.getElementById("new-img").setAttribute("src", img);
    });
});