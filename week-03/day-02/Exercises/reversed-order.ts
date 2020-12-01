'use strict';

// Create a method that decrypts reversed-order.txt

const fs = require('fs');
let decryptedText: string = '';

try {
  let fileContent: string[] = fs.readFileSync('reversed-order.txt', 'utf-8').toString().split('\r\n');
  decryptedText = fileContent.reverse().join('\r\n');
  console.log(decryptedText);
}
catch(e) {
    console.log(e);
};