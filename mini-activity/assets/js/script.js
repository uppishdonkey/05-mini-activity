var form = document.getElementById("form");

var firstNameEl = document.querySelector("#first-name");
var lastNameEl = document.querySelector("#last-name");
var emailEl = document.querySelector("#email");
var passwordEl = document.querySelector("#password");

function handleFormSubmit (event) {
    event.preventDefault();

    var firstName = firstNameEl.value;
    console.log("First Name: " + firstName);

    var lastName = lastNameEl.value;
    console.log("Last Name: " + lastName);

    var email = emailEl.value;
    console.log("Email: " + email);

    var password = passwordEl.value;
    console.log("Password: " + password)
}

form.addEventListener("submit", handleFormSubmit);