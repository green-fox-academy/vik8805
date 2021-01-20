'use strict';
const randomNumberOfDivs = Math.floor((Math.random() * 15) + 5);
const body = document.querySelector('body');
let scrollThresholdTop = -1;
let scrollThresholdBottom = 0;

function createDivElements(numberOfDivs, position = '') {
  for (let i = 0; i < numberOfDivs; i++) {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = randomColor;
    if (position === 'top') {
      body.insertBefore(newDiv, body.childNodes[0]);
      return;
    };
    body.appendChild(newDiv);
  };
};

createDivElements(randomNumberOfDivs);

window.addEventListener('scroll', (event) => {
  let numberOfDivs = document.querySelectorAll('div').length;
  scrollThresholdBottom = (numberOfDivs - 900) + 200 * numberOfDivs;
  if (window.scrollY > 100) {
    scrollThresholdTop = 100;
  };
  if (window.scrollY > scrollThresholdBottom) {
    createDivElements(10);
  };
  if (window.scrollY < scrollThresholdTop) {
    createDivElements(10, 'top');
  };
});