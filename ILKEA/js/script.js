// validate register form
function RegisterValidation(event){

    event.preventDefault()

    const username = document.getElementById('username')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirm-password')
    const physical = document.getElementById('physical')
    const gender = document.getElementById('gender')
    const checkbox = document.getElementById('checkbox')

    if(username.value.length < 3){
        alert("Username must be more than 3 characters")
    }
    else if(email.value.length == ''){
        alert("Email cannot be empty!")
    }
    else if(password.value == ''){
        alert("Password cannot be empty!")
    }
    else if(password.value != confirmPassword.value){
        alert("Password not same!")
    }
    else if(physical.value.length < 5){
        alert("Physical address must be more than 5 characters")
    }
    else if(!gender.checked){
        alert("Please select your gender")
    }
    else if(!checkbox.checked){
        alert("You must agree with the terms and condition")
    }
    else{
        alert("Welcome! Register Successfully")
    }
}

//show banner
let idx = 1;
ShowSlide(idx);

function SliderPos(n) {
    ShowSlide(idx = n);
}

function SliderBtn(n) {
    ShowSlide(idx += n);
}

function ShowSlide(n) {
    let i;
    let slides = document.getElementsByClassName("slides");

    if (n > slides.length) {
        idx = 1
    }
    if (n < 1) {
        idx = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[idx-1].style.display = "block";
}
