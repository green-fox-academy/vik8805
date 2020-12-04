'use strict';

// Write a function that finds the largest element of an array using recursion.

function largestElement(
  arrayToLook: number[],
  lengthOfArray: number,
  largestElementStartZero: number
) {
  if (lengthOfArray === 0) {
    return largestElementStartZero;
  } else if (arrayToLook[lengthOfArray - 1] > largestElementStartZero) {
    largestElementStartZero = arrayToLook[lengthOfArray - 1];
  }
  return largestElement(
    arrayToLook,
    lengthOfArray - 1,
    largestElementStartZero
  );
}

let arr: number[] = [1, 4, 7, 2, 9, 10, 3, 5];

console.log(largestElement(arr, arr.length, 0));
