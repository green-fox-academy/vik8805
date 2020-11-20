'use strict';

export { }

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i: number = 0, pen: string = '', space: string = '', k: number = 0; i < lineCount * 2; i++) {
  for (let j: number = 0; j < lineCount - k; j++) {
  space += ' ';
  }
  if (i % 2 === 1) {
    console.log(space, pen);
    k += 1;
  }
  pen += '*';
  space = '';
}