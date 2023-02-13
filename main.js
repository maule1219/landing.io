// main.js
document.addEventListener("DOMContentLoaded", function() {

  // Get references to the form and submit button
  const form = document.querySelector('form');
  const submitButton = form.querySelector('button[type="submit"]');

  // Show a loading spinner when the form is submitted
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

    // Use setTimeout to simulate an API call
    setTimeout(function() {
      // Remove the loading spinner and show a success message
      submitButton.innerHTML = 'Success!';
      form.reset();

      // Show a modal with a success message
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = `
        <div class="modal-content">
          <p>You have successfully subscribed to our channel!</p>
        </div>
      `;
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

