'use strict';

// Find the greatest common divisor of two numbers using recursion.

function greatestCommonDivisor(numberOne: number, numberTwo: number) {
  if (numberOne === 0 || numberTwo === 0) {
    return `You can't divide 0 so there is no common divisor`;
  }
  if (numberOne === numberTwo) {
    return numberOne;
  } else if (numberOne > numberTwo) {
    return greatestCommonDivisor(numberOne - numberTwo, numberTwo);
  } else {
    return greatestCommonDivisor(numberOne, numberTwo - numberOne);
  }
}

console.log(greatestCommonDivisor(336, 72));
