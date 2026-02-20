document.getElementById("decline").addEventListener("click", function() {
    document.querySelector(".cookies").style.display = "none";
});

document.getElementById("consent").addEventListener("click", function() {
    document.querySelector(".cookies h3").textContent = "Congratulations";
    document.querySelector(".cookies p").textContent = "Visit Skyrim now and we will set a dragon on you free of charge!";
    document.getElementById("consent").style.display = "none";
    document.getElementById("decline").textContent = "Yay!";
});