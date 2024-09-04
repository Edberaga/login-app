const username = document.getElementById('username').value.toLowerCase();
const password = document.getElementById('password');
const result = document.getElementById('result');

function validate () {
    console.log(username);
    if(username.value === "" || password.value === "") {
        result.innerHTML = "Please fill in both fields.";
        return
    }
    if(username.value === "edbert" && password.value === "12345") {
        result.innerHTML = "Welcome, Edbert!";
        return
    } else if(username.value !== "edbert") {
        result.innerHTML = "Username not founded.";
        return
    } else if(password.value !== "12345") {
        result.innerHTML = "Incorrect password.";
        return
    } else {
        result.innerHTML = "Error: Username and password not founded.";
        return
    }
}