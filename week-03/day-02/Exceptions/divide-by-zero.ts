'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideByZero(inputNumber: number): void {
  let result: number = 10 / inputNumber;
  if (result !== Infinity) {
    return console.log(result);
  } else {
    return console.log('fail');
  };
};

divideByZero(0);