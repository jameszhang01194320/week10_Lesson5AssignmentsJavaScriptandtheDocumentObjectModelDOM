document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const colorButton = document.getElementById('colorButton');
  
    colorButton.addEventListener('click', () => {
      // Generate a random color
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      box.style.backgroundColor = randomColor;
    });
  });
  


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
  