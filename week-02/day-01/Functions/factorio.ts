'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(inputNumb: number): number {
  let factorialOfNumb: number = 1;
  for (let i = inputNumb; i > 1; i--) {
    factorialOfNumb *= i;
  }
  return factorialOfNumb;
}

console.log(factorio(5));
