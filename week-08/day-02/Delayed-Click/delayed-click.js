'use strict';

// Create a simple HTML document with one button. 
// If the user clicks the button it should wait 2 seconds 
// and it should show a text under the button: 2 seconds ellapsed

const button = document.querySelector('button');
const paragraph = document.querySelector('p');
let timeout = null;

button.addEventListener('click', (event) => {
  if (timeout != null) return;
  timeout = setTimeout(() => {
    paragraph.innerHTML = '2 seconds ellapsed';
    timeout = null;
  }, 2000);
});