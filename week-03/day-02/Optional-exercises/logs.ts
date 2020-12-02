'use strict';

// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

const fs = require('fs');
let fileContentMatrix: string[][] = [];
try {
  let fileContentArr: string[] = fs.readFileSync('log.txt', 'utf-8').split('\r\n');
  for (let i: number = 0; i < fileContentArr.length; i++) {
    fileContentMatrix.push([fileContentArr[i].slice(0, 24), fileContentArr[i].slice(27, 38), fileContentArr[i].slice(41, 45)]);
  };
}
catch(e) {
};

function adresses(input: string[][]): string[] {
  let adressesIP: string[] = [];
  for (let i: number = 0; i < input.length; i++) {
      let checker: boolean = true;
      if (adressesIP.indexOf(input[i][1]) >= 0) {
        checker = false;
      };
      if (checker) {
        adressesIP.push(input[i][1]);
      };
  };
  return adressesIP;
};

console.log(adresses(fileContentMatrix));


function getPostRatio(input: string[][]): string {
  let getCounter: number = 0;
  let postCounter: number = 0;
  let ratio: string = '';
  for (let i: number = 0; i < input.length; i++) {
    if (input[i][2] != 'POST') {
      getCounter += 1;
    } else {
      postCounter += 1;
    };
  };
  ratio = `GET / POST request ratio is ${getCounter} / ${postCounter}`;
  return ratio;
};

console.log(getPostRatio(fileContentMatrix));