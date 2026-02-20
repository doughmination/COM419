document.getElementById("submit").addEventListener("click", function(event) {
    document.querySelector(".form").style.display = "none";
    document.querySelector(".thanks").style.display = "block";
    event.preventDefault();
});