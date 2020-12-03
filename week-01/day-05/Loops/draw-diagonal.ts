'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 0, str: string = ''; i < lineCount; i++) {
  str = '';
  if (i === 0 || i === lineCount - 1) {
    for (let j: number = 0; j < lineCount; j++) {
      str += '%';
    }
    console.log(str);
  } else {
    str += '%';
    for (let k: number = 0; k < lineCount - 2; k++) {
      if (i === k + 1) {
        str += '%';
      } else {
        str += ' ';
      }
    }
    str += '%';
    console.log(str);
  }
}
