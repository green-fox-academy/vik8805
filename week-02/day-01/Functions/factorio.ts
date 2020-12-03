'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(inputNumber: number): number {
  let factorialOfNumber: number = 1;
  for (let i: number = inputNumber; i > 1; i--) {
    factorialOfNumber *= i;
  }
  return factorialOfNumber;
}

console.log(factorio(5));
