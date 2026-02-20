function hide() {
    document.querySelector(".cookies").style.display = "none";
}

document.getElementById("decline").addEventListener("click", function() {
    hide();
});

document.getElementById("consent").addEventListener("click", function() {
    document.querySelector(".cookies h3").textContent = "Congratulations";
});