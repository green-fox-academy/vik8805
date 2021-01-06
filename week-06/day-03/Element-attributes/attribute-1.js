'use strict';

/*
  Write the image's url to the console.
  Replace the image with a picture of your favorite animal.
  Make the link point to the Green Fox Academy website.
  Disable the second button.
  Replace its text with 'Don't click me!'.
*/
const image = document.querySelector('img');
const link = document.querySelector('a');
const secondButton = document.querySelector('.this-one')

console.log(image.getAttribute('src'));

image.setAttribute('src', 'https://napidoktor.hu/wp-content/uploads/2016/03/voeroes-mokus.jpg')

link.setAttribute('href', 'https://www.greenfoxacademy.com/')

secondButton.setAttribute('disabled', 'true');
secondButton.innerText = `Don't click me!`;