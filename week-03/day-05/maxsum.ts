'use strict';

// Create a function called maxSum which expects an array of five integers as an input parameter
// and returns the maximum values that can be calculated by summing exactly four of the five integers.

function maxSum(arrayOfFiveNumbers: number[]) {
  let maxSumValue: number = 0;
  let position: number = 0;
  function sumArrayValues(arrayOfFiveNumbers: number[], position, maxSumValue) {
    if (position === arrayOfFiveNumbers.length - 1) {
      return maxSumValue;
    } else {
      let temporaryMaxValue: number = 0;
      for (let i: number = 0; i < arrayOfFiveNumbers.length; i++) {
        temporaryMaxValue += arrayOfFiveNumbers[i];
      }
      if ((temporaryMaxValue -= arrayOfFiveNumbers[position]) > maxSumValue) {
        maxSumValue = temporaryMaxValue;
      }
      return sumArrayValues(arrayOfFiveNumbers, position + 1, maxSumValue);
    }
  }
  return sumArrayValues(arrayOfFiveNumbers, position, maxSumValue);
}

let arr: number[] = [4, 3, 5, 1, 2];

console.log(maxSum(arr));
