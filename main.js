// main.js
document.addEventListener("DOMContentLoaded", function() {

  // Get references to the form and submit button
  const form = document.querySelector('form');
  const submitButton = form.querySelector('button[type="submit"]');

  // Show a loading spinner when the form is submitted
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

    // Use setTimeout to simulate an API call
    setTimeout(function() {
      // Remove the loading spinner and show a success message
      submitButton.innerHTML = 'Cinco Cinco - Success!';
      form.reset();

      // Show a modal with a success message
      const modal = document.createElement('div');
      modal.classList.add('modal');
      const modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');
      modalContent.innerHTML = '<p>You have successfully subscribed to our line!</p>';
      modal.appendChild(modalContent);
      document.body.appendChild(modal);
      modal.style.display = 'block';

      // Close the modal after 3 seconds
      setTimeout(function() {
        modal.style.display = 'none';
        document.body.removeChild(modal);
      }, 3000);
    }, 1000);
  });
});
