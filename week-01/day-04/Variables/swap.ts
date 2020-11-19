'use strict';

// Swap the values of these variables
let numberToSwap1: number = 123;
let numberToSwap2: number = 526;

console.log(numberToSwap1);
console.log(numberToSwap2);

[numberToSwap1, numberToSwap2] = [numberToSwap2, numberToSwap1];

console.log(numberToSwap1);
console.log(numberToSwap2);