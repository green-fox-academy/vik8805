'use strict';

// Create a method that decrypts duplicated-chars.txt

const fs = require('fs');
let decryptedText: string = '';

try {
  let fileContent: string = fs.readFileSync('duplicated-chars.txt', 'utf-8');
  for (let i = 0; i < fileContent.length; i++) {
    if (i % 2) {
      decryptedText += fileContent[i];
    }
  }
  console.log(decryptedText);
} catch (e) {
  console.log(e);
}
