'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum(givenNumber: number): number {
  for (let i: number = givenNumber - 1; i > 0; i--) {
    givenNumber += i;
  }
  return givenNumber;
}

console.log(sum(21));
