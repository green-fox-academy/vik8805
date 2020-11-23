'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum(givenNumb: number): number {
  let sumOfNumb: number = 0;
  for (let i = 0; i <= givenNumb; i++) {
    sumOfNumb += i;
  }
  return sumOfNumb;
}

console.log(sum(10));
