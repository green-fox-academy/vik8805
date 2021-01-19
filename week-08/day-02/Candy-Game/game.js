'use strict';

// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

const createCandyButton = document.querySelector('.create-candies');
const buyLollypopsButton = document.querySelector('.buy-lollypops');
const makeCandyRainButton = document.querySelector('.candy-machine');
const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const candiesPerSec = document.querySelector('.speed');
let actualCandies = 0;
let actualLollypops = 3;
let actualCandiesPerSec = 0;

createCandyButton.addEventListener('click', (event) => {
  actualCandies += 100;
  candies.innerHTML = actualCandies;
});

buyLollypopsButton.addEventListener('click', (event) => {
  if (actualCandies < 100) {
    return;
  };
  lollypops.innerHTML += '🍭';
  actualCandies -= 100;
  actualLollypops += 1;
  candies.innerHTML = actualCandies;
  if (actualLollypops > 9) {
    actualCandiesPerSec = Math.floor(actualLollypops / 10);
    candiesPerSec.innerHTML = actualCandiesPerSec;
  };
});

makeCandyRainButton.addEventListener('click', (event) => {
  actualCandiesPerSec *= 10;
  candiesPerSec.innerHTML = actualCandiesPerSec;
});

const countInterval = setInterval(() => {
  if (actualCandiesPerSec > 0) {
    actualCandies += Number(actualCandiesPerSec);
    candies.innerHTML = actualCandies;
  };
}, 1000);
