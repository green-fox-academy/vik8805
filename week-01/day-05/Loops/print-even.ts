'use strict';

// Create a program that prints all the even numbers between 0 and 500

for (let i = 0, j = 1; i < 500; i++, j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
}