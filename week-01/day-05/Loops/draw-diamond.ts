'use strict';

export {};

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

for (let i: number = 0, string: string = ''; i < lineCount; i++) {
  string = '';
  if (i < (lineCount + 1) / 2) {
    for (let j: number = 0; j < (lineCount + 1) / 2 + i; j++) {
      if (j < (lineCount + 1) / 2 - (i + 1)) {
        string += ' ';
      } else if (j === (lineCount + 1) / 2 - (i + 1)) {
        string += '*';
      } else if (j > (lineCount + 1) / 2 - (i + 1)) {
        string += '*';
      }
    }
    console.log(string);
  } else {
    for (let k: number = 0; k < lineCount + (lineCount - 1) / 2 - i; k++) {
      if (k < i - (lineCount - 1) / 2) {
        string += ' ';
      } else if (k === i - (lineCount - 1) / 2) {
        string += '*';
      } else if (k > i - (lineCount - 1) / 2) {
        string += '*';
      }
    }
    console.log(string);
  }
}
