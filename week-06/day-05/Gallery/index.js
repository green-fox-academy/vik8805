'use strict';

let gallery = [
  {
    name: 'clouds',
    title: 'Clouds',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere nulla. Aliquam bibendum, orci ac mollis efficitur, enim ex rutrum risus, ac laoreet lorem turpis feugiat dolor.',
  },
  {
    name: 'clower',
    title: 'Clower',
    description: 'Aliquam purus massa, mattis in augue vel, consequat fermentum erat. Suspendisse nibh nisl, vulputate maximus lorem sit amet, faucibus pellentesque nisi.',
  },
  {
    name: 'lake',
    title: 'Lake',
    description: 'Aenean ac mi nibh. Etiam lacus velit, dignissim non lacus tempor, cursus imperdiet turpis.',
  },
  {
    name: 'rails',
    title: 'Rails',
    description: 'Duis sit amet felis at arcu consectetur lobortis. Maecenas consectetur rutrum ipsum, at laoreet dui hendrerit nec. Donec eu tristique metus.',
  },
  {
    name: 'sunset',
    title: 'Sunset',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere nulla. Aliquam bibendum, orci ac mollis efficitur, enim ex rutrum risus, ac laoreet lorem turpis feugiat dolor.',
  },
  {
    name: 'travel',
    title: 'Travel',
    description: 'Sed non scelerisque urna, ornare vehicula ligula. Phasellus vehicula commodo vulputate. Curabitur pharetra purus id metus molestie tempor. Phasellus aliquam sed risus id bibendum.',
  },
  {
    name: 'water',
    title: 'Water',
    description: 'Donec porta imperdiet venenatis. Aliquam a venenatis magna. Nam suscipit erat sed pulvinar feugiat. Integer consectetur accumsan odio quis lacinia. Aenean dignissim eget ligula in semper.',
  },
  {
    name: 'waves',
    title: 'Waves',
    description: 'Vivamus urna est, cursus in felis quis, eleifend cursus enim. Vestibulum vel dapibus ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
  },
  {
    name: 'landscape',
    title: 'Landscape',
    description: 'Mauris libero arcu, luctus ut cursus nec, tincidunt sed dolor. In laoreet tempor feugiat. Fusce vel urna ullamcorper, imperdiet turpis vitae, gravida diam. Nunc ut efficitur odio.',
  },
  {
    name: 'space',
    title: 'Space',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere nulla. Aliquam bibendum, orci ac mollis efficitur, enim ex rutrum risus, ac laoreet lorem turpis feugiat dolor.',
  },
];

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
newActualImage.setAttribute('src', `images/${gallery[0].name}.jpg`);

const newTextBlock = document.createElement('div');
controlPanel.appendChild(newTextBlock);
newTextBlock.classList.add('textBlock');

const newActualTitle = document.createElement('h3');
const newActualDescript = document.createElement('p');
const textBlock = document.querySelector('.textBlock');
textBlock.appendChild(newActualTitle);
newActualTitle.classList.add('actualTitle');
newActualTitle.textContent = `${gallery[0].title}`;
textBlock.appendChild(newActualDescript);
newActualDescript.classList.add('actualDescript');
newActualDescript.textContent = `${gallery[0].description}`;

for (let i = 0; i < 2; i++) {
  const newArrowImage = document.createElement('img');
  if (i) {
    controlPanel.insertBefore(newArrowImage, controlPanel.childNodes[0]);
    newArrowImage.classList.add('arrowLeft');
    newArrowImage.setAttribute('src', 'images/arrow.svg');
  } else {
    controlPanel.insertBefore(newArrowImage, controlPanel.childNodes[1]);
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
    const newSmallImage = document.createElement('img');
    const smallImageBoxes = document.querySelectorAll(`.smallImageBox`);
    smallImageBoxes[j].appendChild(newSmallImage);
    newSmallImage.classList.add('smallImage');
    newSmallImage.setAttribute('src', `images/${gallery[j].name}.jpg`);
  };
};

const allSmallImage = document.querySelectorAll('.smallImage');
let actualImage = document.querySelector('.actualImage');
let actualImageName = actualImage.getAttribute('src').slice(7, -4);
allSmallImage.forEach((value) => {
  if (value.getAttribute('src').slice(7, -4) === actualImageName) {
    value.parentElement.classList.remove('smallImageBox');
    value.parentElement.classList.add('selectedSmallImageBox');
  };
});

allSmallImage.forEach((value) => {
  value.onclick = () => {
    const newName = value.getAttribute('src').slice(7, -4);
    let newTitle = '';
    let newDescription = '';
    let selectedSmallImageBox = document.querySelector('.selectedSmallImageBox');
    for (let k = 0; k < gallery.length; k++) {
      if (gallery[k].name === newName) {
        newTitle = gallery[k].title;
        newDescription = gallery[k].description;
      };
    };
    actualImage.setAttribute('src', `images/${newName}.jpg`);
    actualImageName = actualImage.getAttribute('src').slice(7, -4);
    newActualTitle.textContent = `${newTitle}`;
    newActualDescript.textContent = `${newDescription}`;
    allSmallImage.forEach((value) => {
      if (value.getAttribute('src').slice(7, -4) === actualImageName) {
        selectedSmallImageBox.classList.remove('selectedSmallImageBox');
        selectedSmallImageBox.classList.add('smallImageBox');
        value.parentElement.classList.remove('smallImageBox');
        value.parentElement.classList.add('selectedSmallImageBox');
      };
    });
  };
});

const arrowLeft = document.querySelector('.arrowLeft')
arrowLeft.onclick = () => {
  actualImageName = actualImage.getAttribute('src').slice(7, -4);
  allSmallImage.forEach((value, index) => {
    if (value.getAttribute('src').slice(7, -4) === actualImageName) {
      const newName = allSmallImage[index - 1].getAttribute('src').slice(7, -4);
      let newTitle = '';
      let newDescription = '';
      let selectedSmallImageBox = document.querySelector('.selectedSmallImageBox');
      for (let k = 0; k < gallery.length; k++) {
        if (gallery[k].name === newName) {
          newTitle = gallery[k].title;
          newDescription = gallery[k].description;
        };
      };
      actualImage.setAttribute('src', `images/${newName}.jpg`);
      newActualTitle.textContent = `${newTitle}`;
      newActualDescript.textContent = `${newDescription}`;
      allSmallImage.forEach((value) => {
        if (value.getAttribute('src').slice(7, -4) === actualImageName) {
          selectedSmallImageBox.classList.remove('selectedSmallImageBox');
          selectedSmallImageBox.classList.add('smallImageBox');
          allSmallImage[index - 1].parentElement.classList.remove('smallImageBox');
          allSmallImage[index - 1].parentElement.classList.add('selectedSmallImageBox');
        };
      });
    };
  });
};

const arrowRight = document.querySelector('.arrowRight')
arrowRight.onclick = () => {
  actualImageName = actualImage.getAttribute('src').slice(7, -4);
  allSmallImage.forEach((value, index) => {
    if (value.getAttribute('src').slice(7, -4) === actualImageName) {
      const newName = allSmallImage[index + 1].getAttribute('src').slice(7, -4);
      let newTitle = '';
      let newDescription = '';
      let selectedSmallImageBox = document.querySelector('.selectedSmallImageBox');
      for (let k = 0; k < gallery.length; k++) {
        if (gallery[k].name === newName) {
          newTitle = gallery[k].title;
          newDescription = gallery[k].description;
        };
      };
      actualImage.setAttribute('src', `images/${newName}.jpg`);
      newActualTitle.textContent = `${newTitle}`;
      newActualDescript.textContent = `${newDescription}`;
      allSmallImage.forEach((value) => {
        if (value.getAttribute('src').slice(7, -4) === actualImageName) {
          selectedSmallImageBox.classList.remove('selectedSmallImageBox');
          selectedSmallImageBox.classList.add('smallImageBox');
          allSmallImage[index + 1].parentElement.classList.remove('smallImageBox');
          allSmallImage[index + 1].parentElement.classList.add('selectedSmallImageBox');
        };
      });
    };
  });
};