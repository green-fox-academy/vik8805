'use strict';

// Given a non-negative integer n, return the sum of its digits recursively (without loops).

function sumDigit(n: number): number {
  if (n === 1) {
    return 1;
  } else {
    return n + sumDigit((n - (n % 10)) / 10);
  }
}

console.log(sumDigit(126));
