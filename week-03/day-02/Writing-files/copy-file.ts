'use strict';

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyFile(copyFrom: string, copyInto: string): boolean {
  const fs = require('fs');
  try {
    let copyFromContent: string = fs.readFileSync(copyFrom, 'utf-8');
    fs.writeFileSync(copyInto, copyFromContent);
  } catch (e) {
    return false;
  }
  return (
    fs.readFileSync(copyFrom, 'utf-8') === fs.readFileSync(copyInto, 'utf-8')
  );
}

console.log(copyFile('innen.txt', 'ide.txt'));
