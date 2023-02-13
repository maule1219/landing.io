document.addEventListener("DOMContentLoaded", function() {
  var logo = document.querySelector("img");
  logo.addEventListener("mouseover", function() {
    logo.style.transform = "scale(1.2)";
  });
  logo.addEventListener("mouseout", function() {
    logo.style.transform = "scale(1)";
  });
});