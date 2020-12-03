'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideByZero(inputNumber: number): void {
  let result: number = 0;
  try {
    if (inputNumber === 0) {
      throw 'fail';
    } else {
      result = 10 / inputNumber;
      return console.log(result);
    }
  } catch (e) {
    return console.log(e);
  }
}

divideByZero(0);
