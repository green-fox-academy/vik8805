'use strict';

/*
  Remove the king from the list.
  Fill the list based on the following list of objects.
  Only add the asteroids to the list.
  Each list item should have its category as a class and its content as text content.
*/

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

const asteroidList = document.querySelector('ul.asteroids');
const king = document.querySelector('li');

asteroidList.removeChild(king);

let counter = 0;
planetData.forEach((element) => {
  if (element.asteroid) {
    const newAsteroid = document.createElement('li');
    asteroidList.appendChild(newAsteroid);
    asteroidList.children[counter].textContent = element.content;
    asteroidList.children[counter].classList.add(element.category);
    counter++;
  }
});
