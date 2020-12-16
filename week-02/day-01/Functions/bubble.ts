'use strict';

//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

//  Example:
//  console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
//  console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]

function bubble(listOfNumbers: number[]): number[] {
  for (let i: number = 0; i < listOfNumbers.length - 1; i++) {
    for (let j: number = 0; j < listOfNumbers.length - i - 1; j++) {
      if (listOfNumbers[j] > listOfNumbers[j + 1]) {
        [listOfNumbers[j], listOfNumbers[j + 1]] = [listOfNumbers[j + 1], listOfNumbers[j]];
      }
    }
  }
  return listOfNumbers;
}
console.log(bubble([34, 12, 24, 9, 5]));

function advancedBubble(listOfNumbers: number[], isDescending: boolean): number[] {
  for (let i: number = 0; i < listOfNumbers.length - 1; i++) {
    for (let j: number = 0; j < listOfNumbers.length - i - 1; j++) {
      if (isDescending) {
        if (listOfNumbers[j] < listOfNumbers[j + 1]) {
          [listOfNumbers[j], listOfNumbers[j + 1]] = [listOfNumbers[j + 1], listOfNumbers[j]];
        }
      } else {
        if (listOfNumbers[j] > listOfNumbers[j + 1]) {
          [listOfNumbers[j], listOfNumbers[j + 1]] = [listOfNumbers[j + 1], listOfNumbers[j]];
        }
      }
    }
  }
  return listOfNumbers;
}
console.log(advancedBubble([34, 12, 24, 9, 5], true));
