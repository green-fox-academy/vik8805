'use strict';

// -  Create a string variable named `typo` and assign the value `Chinchill` to it
// -  Write a function called `appendAFunc` that gets a string as an input,
//    appends an 'a' character to its end and returns with a string
// -  Print the result of `appendAFunc(typo)`

let typo: string = 'Chinchill';

function appendAFunc(inputString: string): string {
  return inputString += 'a';
};

console.log(appendAFunc(typo));