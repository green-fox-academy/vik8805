'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

function fruitChange(word, counter, callback) {
  if (callback(counter)) {
    console.log(word);
  };
};

function multipleTimeout() {
  let counter = 0;
  let word = 'apple';
  console.log(word);
  const countInterval = setInterval(() => {
    counter++;
    fruitChange('pear', counter, c => c === 1);
    fruitChange('melon', counter, c => c === 3);
    fruitChange('grapes', counter, c => c === 5);
    if (counter === 5) {
      clearInterval(countInterval);
    };
  }, 1000);
};

multipleTimeout();