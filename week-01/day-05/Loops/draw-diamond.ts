'use strict';

export {}

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

for (let i: number = 0, pen: string = '', space: string = '', k: number = 0; i < lineCount * 2; i++) {
  space = '';
  pen = '';
  if (i <= lineCount) {
    for (let j: number = 0; j < lineCount - k; j++) {
      space += ' ';
    }
    for (let l: number = 0; l < i; l++) {
      pen += '*';
    }
    if (i % 2 === 1) {
      console.log(space, pen);
      k += 1;
    }
  } else {
    space = '';
    pen = '';
    for (let j: number = 0; j < i - k; j++) {
      space += ' ';
    }
    for (let l: number = 0; l < lineCount * 2 - i; l++) {
      pen += '*';
    }
    if (i % 2 === 1) {
      console.log(space, pen);
      k += 1;
    }
  }
}
