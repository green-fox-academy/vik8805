'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

for (let i: number = 0, lines: number = 8, draw: string = ''; i < lines; i++) {
  draw = '';
  if (i % 2 === 0) {
    for (let j: number = 0; j < lines; j++) {
      if (j % 2 === 0) {
        draw += '%';
      } else {
        draw += ' ';
      }
    }
  } else {
      for (let k: number = 0; k < lines; k++) {
        if (k % 2 === 0) {
          draw += ' ';
        } else {
          draw += '%';
        }
      }
  }
  console.log(draw);
}