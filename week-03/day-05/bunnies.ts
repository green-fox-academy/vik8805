'use strict';

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function numberOfEars(numberOfBunny: number): number {
  if (numberOfBunny === 1) {
    return 2;
  } else {
    return 2 + numberOfEars(numberOfBunny - 1);
  }
}

console.log(numberOfEars(5));
