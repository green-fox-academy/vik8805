'use strict';

let gallery = ['clouds', 'clower', 'lake', 'rails', 'landscape', 'space', 'sunset', 'travel', 'water', 'waves',];

const newBackground = document.createElement('div');
const body = document.querySelector('body');
body.insertBefore(newBackground, body.childNodes[0]);
newBackground.classList.add('background');

const newMain = document.createElement('div');
const background = document.querySelector('.background');
background.appendChild(newMain);
newMain.classList.add('main');

const newControlPanel = document.createElement('div')
const main = document.querySelector('.main');
main.appendChild(newControlPanel);
newControlPanel.classList.add('controlPanel');

const newActualImage = document.createElement('img');
const controlPanel = document.querySelector('.controlPanel');
controlPanel.appendChild(newActualImage);
newActualImage.classList.add('actualImage');
newActualImage.setAttribute('src', 'images/waves.jpg');

for (let i = 0; i < 2; i++) {
  const newArrowImage = document.createElement('img');
  if (i) {
    controlPanel.insertBefore(newArrowImage, controlPanel.childNodes[0]);
    newArrowImage.classList.add('arrowLeft');
    newArrowImage.setAttribute('src', 'images/arrow.svg');
  } else {
    controlPanel.appendChild(newArrowImage);
    newArrowImage.classList.add('arrowRight');
    newArrowImage.setAttribute('src', 'images/arrow.svg');
    newArrowImage.setAttribute('style', 'transform:rotate(180deg);');
  };
};

const newImageStore = document.createElement('div');
main.appendChild(newImageStore);
newImageStore.classList.add('imageStore');

for (let j = 0; j < gallery.length; j++) {
  if (j < 8) {
    const newSmallImageBox = document.createElement('div');
    const imageStore = document.querySelector('.imageStore');
    imageStore.appendChild(newSmallImageBox);
    newSmallImageBox.classList.add(`smallImageBox`);
    newSmallImageBox.classList.add(`${j}`);
    const newSmallImage = document.createElement('img');
    const smallImageBox = document.querySelectorAll(`.smallImageBox`);
    smallImageBox[j].appendChild(newSmallImage);
    newSmallImage.classList.add('smallImage');
    newSmallImage.setAttribute('src', `images/${gallery[j]}.jpg`);
  }
}