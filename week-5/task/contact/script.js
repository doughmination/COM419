document.getElementById("submit").addEventListener("click", function(event) {
    document.querySelector(".form").style.display = "none";
    document.querySelector(".thanks").style.display = "block";
    event.preventDefault();
});

let email = document.forms["form"]["email"].value;
let query = document.forms["form"]["query"].value;
let name = document.forms["form"]["name"].value;
let message = document.forms["form"]["message"].value;

console.log("New contact form submission:");
console.log("Name: " + name);
console.log("Email: " + email);
console.log("Query: " + query);
console.log("Message: " + message);

