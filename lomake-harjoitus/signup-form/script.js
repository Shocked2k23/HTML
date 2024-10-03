function validateForm(){

    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let birthDate = document.getElementById("birth-date").value
    let gender = document.getElementsByName("gender").value
    let country = document.getElementById("country").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let password = document.getElementById("password1").value
    let confirmpassword = document.getElementById("password2").value
    let tsu = document.getElementById("tsu").value
    let validpassword = false

    if (password !== confirmpassword){
        prompt("Passwords don't match")
        validpassword = false
    } else {
        validpassword = true
    }

    if (fname.trim() == ""){
        prompt("Type valid First Name")
    } else if (lname.trim() == ""){
        prompt("Type valid Last Name")
    } else if (email.trim() == ""){
        prompt("Type valid Email Address")
    } else if (phone.trim() == ""){
        prompt("Type valid Phone Number")
    } else if (password.trim() == "" && validpassword == false){
        prompt("Password can't be empty")
    } else if (confirmpassword.trim() == "" && validpassword == false){
        prompt("Password can't be empty or doesn't match")
    }

}

.