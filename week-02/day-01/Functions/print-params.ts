'use strict';

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...inputStr: string[]): void {
  let allInputStr: string = '';
  for (let i = 0; i < inputStr.length; i++) {
    allInputStr += inputStr[i];
    allInputStr += ' ';
  }
  console.log(allInputStr);
}

printParams('Hey', 'Visitor!', 'It\'s', 'my', 'pleasure', 'to', 'see', 'you', 'here.');