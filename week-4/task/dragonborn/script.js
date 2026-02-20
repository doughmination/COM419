// JavaScript for the Dragonborn quiz
// Q1
document.getElementById("q1-a").addEventListener("click", function() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "block";  
});
document.getElementById("q1-b").addEventListener("click", function() {
    document.getElementById("q1").style.display = "none";
    document.getElementById("no").style.display = "block";  
});

// Q2
document.getElementById("q2-a").addEventListener("click", function() {
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "block";
});
document.getElementById("q2-b").addEventListener("click", function() {
    document.getElementById("q2").style.display = "none";
    document.getElementById("no").style.display = "block";  
});

// Q3
document.getElementById("q3-a").addEventListener("click", function() {
    document.getElementById("q3").style.display = "none";
    document.getElementById("yes").style.display = "block";
});
document.getElementById("q3-b").addEventListener("click", function() {
    document.getElementById("q3").style.display = "none";
    document.getElementById("no").style.display = "block";  
}); 