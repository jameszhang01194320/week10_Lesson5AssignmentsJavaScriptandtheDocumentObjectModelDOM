// Function to toggle the heading color between black and blue
function toggleHeading() {
    const heading = document.getElementById('heading');
    if (heading.style.color === 'blue') {
      heading.style.color = 'black'; // Revert to original color
    } else {
      heading.style.color = 'blue'; // Change color to blue
    }
  }
  
  // Function to toggle the box color and shape
  function toggleBoxColor() {
    const box = document.getElementById('box');
    const colors = ['lightgray', 'lightcoral', 'lightgreen', 'lightblue', 'lightyellow'];
    const currentColor = box.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Ensure the new color is different from the current color
    while (newColor === currentColor) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    
    box.style.backgroundColor = newColor;
    
    // Toggle the shape as well
    if (box.style.borderRadius === '50%') {
      box.style.borderRadius = '5px';
    } else {
      box.style.borderRadius = '50%';
    }
  }
  
  // Function to toggle paragraph text alignment
  function toggleParagraph() {
    const paragraph = document.getElementById('paragraph');
    if (paragraph.style.textAlign === 'center') {
      paragraph.style.textAlign = 'left';
    } else {
      paragraph.style.textAlign = 'center';
    }
  }
  
  // Function to toggle button border radius between default and large radius
  function toggleButton() {
    const button = document.getElementById('button');
    if (button.style.borderRadius === '50px') {
      button.style.borderRadius = '5px';
    } else {
      button.style.borderRadius = '50px';
    }
  }
  
  // Function to toggle between ul and ol list types
  function toggleList(event) {
    if (event.target.classList.contains('list-item')) {
      event.target.style.backgroundColor = event.target.style.backgroundColor === 'lightgreen' ? 'lightcoral' : 'lightgreen';
    } else {
      const list = document.getElementById('list');
      const isUl = list.tagName === 'UL';
      const newList = document.createElement(isUl ? 'ol' : 'ul');
      newList.id = 'list';
      newList.innerHTML = list.innerHTML;
      newList.onclick = toggleList; // Rebind the click event to the new list
      list.parentNode.replaceChild(newList, list);
    }
  }
  
  // Function to toggle list item text alignment
  function toggleAlign(event) {
    const item = event.target;
    const currentAlignment = item.style.textAlign;
    if (currentAlignment === 'center') {
      item.style.textAlign = 'left';
    } else if (currentAlignment === 'left') {
      item.style.textAlign = 'right';
    } else {
      item.style.textAlign = 'center';
    }
  }
  