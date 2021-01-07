'use strict';

/*
  Add an item that says 'The Green Fox' to the asteroid list.
  Add an item that says 'The Lamplighter' to the asteroid list.
  Add a heading saying 'I can add elements to the DOM!' to the .container.
  Add an image, any image, to the container.
*/

const asteroidList = document.querySelector('ul.asteroids');
const container = document.querySelector('.container');
const firstNewAsteroid = document.createElement('li');
const secondNewAsteroid = document.createElement('li');
const heading = document.createElement('h1');
const image = document.createElement('img');

firstNewAsteroid.innerText = 'The Green Fox';
asteroidList.appendChild(firstNewAsteroid);

secondNewAsteroid.innerText = 'The Lamplighter';
asteroidList.appendChild(secondNewAsteroid);

heading.innerText = 'I can add elements to the DOM!';
container.appendChild(heading);

image.setAttribute('src', 'https://cdn.the-scientist.com/assets/articleNo/67431/aImg/37291/lemur-wrist-glands-scent-pheromones-primates-testosterone-mating-breeding-sexual-communication-t.png');
container.appendChild(image)