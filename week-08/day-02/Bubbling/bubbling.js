'use strict';

// Here is an image inspector, but the buttons are not implemented yet, that will
// be your task!
//  - the nav buttons (up, down, left, right) move the background by 10px
//  - the zoom buttons increase/decrease the image by 20%
//  - attach only two event listeners to the nav element
//    - one for navigation
//    - one for zooming

const navBar = document.querySelector('nav');
const imgInspector = document.querySelector('.img-inspector');
let actualBackgroundSize = 200;
let actualBackgroundPositionX = 0;
let actualBackgroundPositionY = 0;

navBar.addEventListener('click', (event) => {
  const direction = event.target.dataset.direction;
  if (direction === 'up') {
    imgInspector.style.backgroundPositionY = `${actualBackgroundPositionY -= 10}px`;
  };
  if (direction === 'down') {
    imgInspector.style.backgroundPositionY = `${actualBackgroundPositionY += 10}px`;
  };
  if (direction === 'left') {
    imgInspector.style.backgroundPositionX = `${actualBackgroundPositionX -= 10}px`;
  };
  if (direction === 'right') {
    imgInspector.style.backgroundPositionX = `${actualBackgroundPositionX += 10}px`;
  };
});

navBar.addEventListener('click', (event) => {
  const direction = event.target.dataset.direction;
  if (direction === 'out') {
    imgInspector.style.backgroundSize = `${actualBackgroundSize -= 20}%`;
  };
  if (direction === 'in') {
    imgInspector.style.backgroundSize = `${actualBackgroundSize += 20}%`;
  };
});