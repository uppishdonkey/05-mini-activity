var form = document.getElementById("htmlForm");

var firstNameEl = document.querySelector("#first-name");
var lastNameEl = document.querySelector("#last-name");
var emailEl = document.querySelector("#email");
var passwordEl = document.querySelector("#password");
var ulEl = document.querySelector("#creds");

var firstNameDisplay = document.createElement("li");
var lastNameDisplay = document.createElement("li");

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

    firstNameDisplay.textContent = firstName;
    ulEl.appendChild(firstNameDisplay);

    lastNameDisplay.textContent = lastName;
    ulEl.appendChild(lastNameDisplay);
}

form.addEventListener("submit", handleFormSubmit);