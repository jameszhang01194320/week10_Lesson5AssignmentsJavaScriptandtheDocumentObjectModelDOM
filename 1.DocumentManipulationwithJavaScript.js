// Lesson 5: Assignments | JavaScript and the Document Object Model DOM

// 1. Document Manipulation with JavaScript

// Task 1: Create an array containing information about different products, including their names, prices, and descriptions.

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];


// Task 2: Write a function to display the product information on the webpage dynamically.

function displayProducts() {
    // Get the container element where the product information will be displayed
    const container = document.getElementById('product-container');
    
    // Clear any existing content in the container
    container.innerHTML = '';
  
    // Loop through each product and create HTML elements
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
  
      const productName = document.createElement('h2');
      productName.textContent = product.name;
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `Price: $${product.price.toFixed(2)}`;
  
      const productDescription = document.createElement('p');
      productDescription.textContent = product.description;
  
      // Append the elements to the productDiv
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(productDescription);
  
      // Append the productDiv to the container
      container.appendChild(productDiv);
    });
  }

// Task 3: Implement an event listener to trigger the display of products when the page loads.

// Event listener to trigger displayProducts on page load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
  });
  

// see  Example HTML Structure



  


// 2. Form Manipulation with JavaScript

// Task 1: Create an HTML form with input fields for the user's name, email, and message.

/*******see HTML_form_with_input_fields_for.html ************/

// Task 2: Write JavaScript code to handle form submissions and store user input in an object.

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
  
      form.reset();
    });
  });
  


// Task 3: Implement form validation to ensure that all required fields are filled before submission.

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
  




// 3. Styling with JavaScript
// Objective: The objective of this assignment is to practice manipulating CSS styles dynamically using JavaScript. By the end of this assignment, students should be able to apply various styling changes to HTML elements based on user interaction or other events.

// Problem Statement: You are tasked with creating a web page that demonstrates dynamic styling using JavaScript. The page should include HTML elements that change their appearance in response to user actions or events triggered by JavaScript functions.

// Task 1: Create an HTML structure with at least 5 elements that will be styled dynamically.

// ********see an_HTML_Structure_with_at_Least_5_Elements.html


// Task 2: Write JavaScript code to dynamically change the color of the box element when clicked.

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const colorButton = document.getElementById('colorButton');
  
    colorButton.addEventListener('click', () => {
      // Generate a random color
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      box.style.backgroundColor = randomColor;
    });
  });
  


// Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const colorButton = document.getElementById('colorButton');
    const hoverDiv = document.getElementById('hoverDiv');
    const toggleButton = document.getElementById('toggleButton');
    const text = document.getElementById('text');
  
    // Change box color on button click
    colorButton.addEventListener('click', () => {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      box.style.backgroundColor = randomColor;
    });
  
    // Toggle text visibility on button click
    toggleButton.addEventListener('click', () => {
      if (text.classList.contains('hidden')) {
        text.classList.remove('hidden');
        toggleButton.textContent = 'Hide Text';
      } else {
        text.classList.add('hidden');
        toggleButton.textContent = 'Show Text';
      }
    });
  
    // Additional interaction: change hover effect div color
    hoverDiv.addEventListener('mouseover', () => {
      hoverDiv.style.backgroundColor = 'orange';
    });
  
    hoverDiv.addEventListener('mouseout', () => {
      hoverDiv.style.backgroundColor = 'lightgreen';
    });
  });
  


// Expected Outcomes:

// The HTML structure includes an element (e.g., a box) that responds to user interaction.
// JavaScript code successfully changes the color of the box element when clicked, providing a visual feedback mechanism.
// Additional styling changes, such as mouse hover effects or button clicks, are implemented to enhance user experience and engagement.