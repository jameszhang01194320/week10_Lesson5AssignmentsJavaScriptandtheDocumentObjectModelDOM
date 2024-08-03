// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Collect user input
      const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };
  
      console.log('User Data:', userData);
  
      // Here you can handle further actions like sending data to a server
      // For now, we'll just clear the form
      form.reset();
    });
  });

// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
      alert('All fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Collect user input
    const userData = {
      name: name,
      email: email,
      message: message
    };

    console.log('User Data:', userData);

    // Here you can handle further actions like sending data to a server
    // For now, we'll just clear the form
    form.reset();
  });

  // Function to validate email address
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
