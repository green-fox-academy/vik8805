'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial
/*
function factorio(inputNumber: number): number {
  let factorialOfNumber: number = 1;
  for (let i: number = inputNumber; i > 1; i--) {
    factorialOfNumber *= i;
  }
  return factorialOfNumber;
}*/

// With recursion
function factorio(inputNumber: number): number {
  if (inputNumber === 0) {
    return 1;
  } else {
    return inputNumber * factorio(inputNumber - 1);
  }
}

console.log(factorio(5));
