'use strict';

const body = document.querySelector('body');

setBodyStyle();
createMainBlock();
createThumbnails(16);
createBigImage();
onload = () => {
  getImage();
};

function setBodyStyle() {
  body.style.padding = '0';
  body.style.margin = '0';
  body.style.backgroundColor = 'grey';
  body.style.display = 'flex';
  body.style.flexDirection = 'column';
  body.style.justifyContent = 'center';
};

function createMainBlock() {
  const newMain = document.createElement('div');
  newMain.classList.add('main');
  newMain.style.padding = '0';
  newMain.style.margin = '0';
  newMain.style.height = '100%';
  newMain.style.width = '100%';
  newMain.style.display = 'flex';
  newMain.style.flexWrap = 'wrap';
  newMain.style.justifyContent = 'center';
  newMain.style.alignSelf = 'center';
  body.appendChild(newMain);
};

function createThumbnails(number) {
  const main = document.querySelector('.main')
  for (let i = 0; i < number; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.backgroundColor = 'white';
    newDiv.style.padding = '10px';
    newDiv.style.height = '100px';
    newDiv.style.width = '100px';
    newDiv.style.margin = '5px';
    newDiv.style.display = 'flex';
    newDiv.style.flexWrap = 'wrap';
    newDiv.style.justifyContent = 'center';
    main.appendChild(newDiv);
    const newImg = document.createElement('img');
    newImg.style.width = 'fit-content';
    newImg.style.maxWidth = '100%';
    newImg.style.height = 'fit-content';
    newImg.style.maxHeight = '100%';
    newImg.style.alignSelf = 'center';
    newImg.style.overflow = 'hidden';
    newImg.classList.add('thumbnail');
    newImg.setAttribute('onclick', 'displayBig(this)')
    newDiv.appendChild(newImg);
  };
};

function createBigImage() {
  const newImg = document.createElement('img');
  newImg.style.padding = '10px';
  newImg.style.backgroundColor = 'white';
  newImg.style.width = 'fit-content';
  newImg.style.maxWidth = '50%';
  newImg.style.height = 'fit-content';
  newImg.style.maxHeight = '50%';
  newImg.style.alignSelf = 'center';
  newImg.style.overflow = 'hidden';
  newImg.classList.add('bigImage');
  body.appendChild(newImg);
};

function displayBig(img) {
  const actualBigImage = document.querySelector('.bigImage');
  const onclickedSmallImageUrl = img.getAttribute('src');
  actualBigImage.setAttribute('src', onclickedSmallImageUrl);
};

function getImage() {
  const xhr = new XMLHttpRequest();
  const thumbnails = document.querySelectorAll('.thumbnail');
  xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=1t7x9LbcCzUXdIgeKrzB6HH7vslW1lWJ&q=funnycats&limit=${thumbnails.length}&offset=0&rating=G&lang=en`);
  xhr.onload = () => {
    const response = JSON.parse(xhr.response);
    thumbnails.forEach((img, index) => {
      if (index === 0) {
        const bigImage = document.querySelector('.bigImage');
        bigImage.setAttribute('src', response.data[index].images.original.url)
      };
      img.setAttribute('src', response.data[index].images.original.url)
    });
  };
  xhr.send();
};