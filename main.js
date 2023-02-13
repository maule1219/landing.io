// main.js
document.addEventListener("DOMContentLoaded", function() {
  var box = document.querySelector(".box");
  box.addEventListener("mouseenter", function() {
    box.style.backgroundColor = "#333";
    box.style.color = "#fff";
    box.innerHTML = "Subscribe for updates";
  });
  box.addEventListener("mouseleave", function() {
    box.style.backgroundColor = "#ffd700";
    box.style.color = "#333";
    box.innerHTML = "";
  });
});

