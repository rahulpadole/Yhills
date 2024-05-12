$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
      event.preventDefault();
      // Add form validation and submission logic here
      // For example, you can validate fields like this:
      var name = $('#name').val();
      var dob = $('#dob').val();
      var gender = $("input[name='gender']:checked").val();
      if (!name || !dob || !gender) {
        alert("Please fill in all required fields.");
        return;
      }
      // If all fields are filled, proceed with form submission
      // You can use AJAX to submit the form data to a server or simply display a success message
      alert("Registration successful!");
      // You can also redirect the user to another page after successful registration
      // window.location.href = "success.html";
    });
  });
  