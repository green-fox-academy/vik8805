'use strict';

const myDiv = document.querySelector('div');

myDiv.addEventListener('left-side-click', (ev) => {
  ev.target.style.backgroundColor = 'yellow';
});

myDiv.addEventListener('right-side-click', (ev) => {
  ev.target.style.backgroundColor = 'blue';
});

myDiv.addEventListener('click', (event) => {
  if (event.y < 300 && event.x < 201) {
    myDiv.dispatchEvent(new CustomEvent("left-side-click"));
  };
  if (event.y < 300 && event.x >= 201) {
    myDiv.dispatchEvent(new CustomEvent("right-side-click"));
  };
});
