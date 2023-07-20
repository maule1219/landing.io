// modal.js
document.addEventListener("DOMContentLoaded", function() {
  var trigger = document.querySelector("input[type='submit']");
  var modal = document.createElement("div");
  modal.className = "modal"; // Adding a class to style the modal

  // Assuming there's a modal content to display
  var modalContent = document.createElement("div");
  modalContent.textContent = "This is the modal content.";
  modal.appendChild(modalContent);

  // Function to show the modal
  function showModal() {
    modal.style.display = "block";
  }

  // Function to hide the modal
  function hideModal() {
    modal.style.display = "none";
  }

  // Attach the click event to the trigger button
  trigger.addEventListener("click", showModal);

  // Append the modal to the document body
  document.body.appendChild(modal);
});

