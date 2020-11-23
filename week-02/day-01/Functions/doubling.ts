'use strict';

// -  Create a variable named `baseNum` and assign the value `123` to it
// -  Create a function called `doubling` that doubles it's input parameter and returns with an integer
// -  Log the result of `doubling(baseNum)` to the console

let baseNum: number = 123;

function doubling(input: number): number {
  let result: number = input * 2;
  return result;
}

console.log(doubling(baseNum));

