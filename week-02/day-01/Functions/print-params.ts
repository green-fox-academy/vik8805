'use strict';

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...inputString: string[]): void {
  let allInputString: string = '';
  for (let i: number = 0; i < inputString.length; i++) {
    allInputString += `${inputString[i]} `;
  }
  console.log(allInputString);
}

printParams(
  'Hey',
  'Visitor!',
  "It's",
  'my',
  'pleasure',
  'to',
  'see',
  'you',
  'here.'
);
