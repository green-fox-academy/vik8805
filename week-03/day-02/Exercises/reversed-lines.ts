'use strict';

// Create a method that decrypts reversed-lines.txt

const fs = require('fs');
let decryptedText: string = '';

try {
  let fileContent: string[] = fs
    .readFileSync('reversed-lines.txt', 'utf-8')
    .toString()
    .split('\r\n');
  for (let i: number = 0; i < fileContent.length; i++) {
    decryptedText += `${fileContent[i].split('').reverse().join('')}\r\n`;
  }
  console.log(decryptedText);
} catch (e) {
  console.log(e);
}
