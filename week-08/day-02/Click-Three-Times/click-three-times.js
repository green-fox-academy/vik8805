'use strict';

// Create a simple HTML document with one button. 
// If the user clicks the button it should wait 2 seconds 
// and it should show a text under the button: 2 seconds ellapsed

const button = document.querySelector('button');
const paragraph = document.querySelector('p');
let timeout = null;
let timeChecker = false;
let clickCounter = 0;

window.onload = () => {
  let count = 1;
  const countInterval = setInterval(() => {
    count++;
    if (count > 5) {
      timeChecker = true;
      if (clickCounter > 2 && timeChecker) {
        paragraph.innerHTML = '5 seconds elapsed and clicked 3 times';
      };
      clearInterval(countInterval);
    };
  }, 1000);
};

button.addEventListener('click', (event) => {
  clickCounter++;
  if (clickCounter > 2 && timeChecker) {
    paragraph.innerHTML = '5 seconds elapsed and clicked 3 times';
  };
});