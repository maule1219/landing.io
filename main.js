// mouse.js
document.addEventListener("DOMContentLoaded", function() {
  var box = document.querySelector(".box");
  box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "red";
  });
  box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "yellow";
  });
});
