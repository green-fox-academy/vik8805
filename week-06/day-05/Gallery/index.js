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

function createNewElement(elementTag, elementClass, createInto, setAttribute = {}) {
  const newElement = document.createElement(`${elementTag}`);
  createInto.appendChild(newElement);
  newElement.classList.add(`${elementClass}`);
  for (let i = 0; i < Object.keys(setAttribute).length; i++) {
    newElement.setAttribute(`${Object.keys(setAttribute)[i]}`, `${setAttribute[Object.keys(setAttribute)[i]]}`);
  };
};

function changeSelectedSmallImageBox(newSelectedSmallImageBox) {
  const selectedSmallImageBox = document.querySelector('.selectedSmallImageBox');
  if (selectedSmallImageBox !== null) {
    selectedSmallImageBox.classList.remove('selectedSmallImageBox');
    selectedSmallImageBox.classList.add('smallImageBox');
  };
  newSelectedSmallImageBox.classList.remove('smallImageBox');
  newSelectedSmallImageBox.classList.add('selectedSmallImageBox');
};

function reloadImageStore(onclickedSmallImageIndexInGallery, indexModifier) {
  const indexOfFirstImage = onclickedSmallImageIndexInGallery - indexModifier;
  const imageStore = document.querySelector('.imageStore');
        while (imageStore.firstChild) {
          imageStore.removeChild(imageStore.lastChild);
        };
  for (let m = 0; m < 8; m++) {
    createNewElement('div', 'smallImageBox', document.querySelector('.imageStore'));
    createNewElement('img', 'smallImage', document.querySelectorAll(`.smallImageBox`)[m], {src: `images/${gallery[indexOfFirstImage + m].name}.jpg`, onclick: `onclickSmallImage(this)`});
  };
  changeSelectedSmallImageBox(imageStore.childNodes[indexModifier]);
};

//add background
createNewElement('div', 'background', document.querySelector('body'));

//add main block
createNewElement('div', 'main', document.querySelector('.background'));

//add control panel in to main block
createNewElement('div', 'controlPanel', document.querySelector('.main'));

//add big image in to control panel, start with first image in gallery
createNewElement('img', 'actualImage', document.querySelector('.controlPanel'), {src: `images/${gallery[0].name}.jpg`});

//add text block in to control panel, with title and description of first image
createNewElement('div', 'textBlock', document.querySelector('.controlPanel'));
createNewElement('h3', 'actualTitle', document.querySelector('.textBlock'), {textContent: `${gallery[0].title}`});
createNewElement('p', 'actualDescript', document.querySelector('.textBlock'), {textContent: `${gallery[0].description}`});

//add right and left arrows, to slide between images
createNewElement('img', 'arrowLeft', document.querySelector('.controlPanel'), {src: 'images/arrow.svg', onclick: `onclickArrow(${-1})`});
createNewElement('img', 'arrowRight', document.querySelector('.controlPanel'), {src: 'images/arrow.svg', style: 'transform:rotate(180deg);', onclick: `onclickArrow(${1})`});

//add image store panel, below of control panel
createNewElement('div', 'imageStore', document.querySelector('.main'));
for (let j = 0; j < gallery.length; j++) {
  if (j < 8) {
    if (!j) {
      createNewElement('div', 'selectedSmallImageBox', document.querySelector('.imageStore'));
    } else {
      createNewElement('div', 'smallImageBox', document.querySelector('.imageStore'));
    };
    createNewElement('img', 'smallImage', document.querySelectorAll(`.smallImageBox, .selectedSmallImageBox`)[j], {src: `images/${gallery[j].name}.jpg`, onclick: `onclickSmallImage(this)`});
  };
};

function onclickSmallImage(img) {
  const actualBigImage = document.querySelector('.actualImage');
  const onclickedSmallImageName = img.getAttribute('src').slice(7, -4);
  let onclickedSmallImageIndexInGallery = -1;
  const allSmallImageBox = document.querySelectorAll('.smallImageBox, .selectedSmallImageBox');
  let smallImageBoxIndex = -1;
  for (let k = 0; k < gallery.length; k++) {
    if (gallery[k].name === onclickedSmallImageName) {
      onclickedSmallImageIndexInGallery = k;
    };
  };
  actualBigImage.setAttribute('src', `images/${onclickedSmallImageName}.jpg`);
  document.querySelector('h3').setAttribute('textContent', `${gallery[onclickedSmallImageIndexInGallery].title}`);
  document.querySelector('p').setAttribute('textContent', `${gallery[onclickedSmallImageIndexInGallery].description}`);
  allSmallImageBox.forEach((value, index) => {
    if (value.firstChild === img) {
      smallImageBoxIndex = index;
    };
  });
  if (smallImageBoxIndex === 7 && onclickedSmallImageIndexInGallery < gallery.length - 1) {
    reloadImageStore(onclickedSmallImageIndexInGallery, 6);
  } else if (smallImageBoxIndex === 0 && onclickedSmallImageIndexInGallery > 0) {
    reloadImageStore(onclickedSmallImageIndexInGallery, 1);
  } else {
    changeSelectedSmallImageBox(img.parentElement);
  };
};

function onclickArrow(indexModifier) {
  const selectedSmallImage = document.querySelector('.selectedSmallImageBox').firstChild;
  const allSmallImageBox = document.querySelectorAll(`.smallImageBox, .selectedSmallImageBox`);
  let smallImageBoxIndex = -1;
  allSmallImageBox.forEach((value, index) => {
    if (value.firstChild === selectedSmallImage) {
      smallImageBoxIndex = index;
    };
  });
  if (smallImageBoxIndex === 7 && indexModifier === 1) {
    reloadImageStore(0, 0);
    const firstImageInGallery = document.querySelector('.imageStore').firstChild.firstChild;
    onclickSmallImage(firstImageInGallery);
  } else if (smallImageBoxIndex === 0 && indexModifier === -1) {
    reloadImageStore(gallery.length - 1, 7);
    const lastImageInGallery = document.querySelector('.imageStore').lastChild.firstChild;
    onclickSmallImage(lastImageInGallery);
  } else {
    onclickSmallImage(allSmallImageBox[smallImageBoxIndex + indexModifier].firstChild);
  };
};