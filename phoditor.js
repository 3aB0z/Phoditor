/*//Show & hide element with animation
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

//Show & hide products
let productSwitcher = true;
function showHideProducts(products,productsBtn,caretDown) {
    if (productSwitcher) {
        products.style.display = 'block';
        //Rotate the caret forwards
        caretDown.animate([
            //Keyframes
            {transform: "rotateZ(0deg)"},
            {transform: "rotateZ(-90deg)"}
        ],{
            //Timing options
            duration: 100,
            iterations: 1,
            fill: "both"
        });
        productsBtn.style.backgroundColor = 'rgb(206, 206, 206)';
        productSwitcher = false;
    } else {
        products.style.display = 'none';
        //Rotate the caret backwards
        caretDown.animate([
            //Keyframes
            {transform: "rotateZ(-90deg)"},
            {transform: "rotateZ(0deg)"}
        ],{
            //Timing options
            duration: 100,
            iterations: 1,
            fill: "both"
        });
        productsBtn.style.backgroundColor = '';
        productSwitcher = true;
    }
}

//Show & hide menu products
let menuProductSwitcher = true;
function showHideMenuProducts(menuProducts,menuProductsBtn,menuCaretDown) {
    if (menuProductSwitcher) {
        menuProducts.style.display = 'block';
        //Rotate the caret forwards
        menuCaretDown.animate([
            //Keyframes
            {transform: "rotateZ(0deg)"},
            {transform: "rotateZ(-90deg)"}
        ],{
            //Timing options
            duration: 100,
            iterations: 1,
            fill: "both"
        });
        menuProductsBtn.style.backgroundColor = 'rgb(206, 206, 206)';
        menuProductSwitcher = false;
    } else {
        menuProducts.style.display = 'none';
        //Rotate the caret backwards
        menuCaretDown.animate([
            //Keyframes
            {transform: "rotateZ(-90deg)"},
            {transform: "rotateZ(0deg)"}
        ],{
            //Timing options
            duration: 100,
            iterations: 1,
            fill: "both"
        });
        menuProductsBtn.style.backgroundColor = '';
        menuProductSwitcher = true;
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

let cookiesSwitcher = true;
function showHideCookies(elementDisplayed) {
    if (cookiesSwitcher) {
        elementDisplayed.style.display = 'block';
        cookiesSwitcher = false;
    } else {
        elementDisplayed.style.display = 'none';
        cookiesSwitcher = true;
    }
}*/