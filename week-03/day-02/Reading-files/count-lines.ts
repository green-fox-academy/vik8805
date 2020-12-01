'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function countLines(fileName: string): number {
  let numberOfLines: number = 0;
  const fs = require('fs');
  try {
    let fileContent: string = fs.readFileSync(fileName, 'utf-8');
    numberOfLines = fileContent.split("\n").length;
  }
  catch(e) {
  };
  return numberOfLines;
};

console.log(countLines('readme.txt'));