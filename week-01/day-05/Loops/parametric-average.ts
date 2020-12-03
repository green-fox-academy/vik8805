'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let givenNumber: number = 5;
let sum: number = 0;
let average: number = 0;

for (let i: number = 0, j: number = givenNumber + 1; i < j; i++) {
  sum += i;
  if (i < givenNumber) {
    average += i;
  } else if ((i = givenNumber)) {
    average = (average + i) / givenNumber;
  }
}

console.log('Sum:', sum);
console.log('Average:', average);
