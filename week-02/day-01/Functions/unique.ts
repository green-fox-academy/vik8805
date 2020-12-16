'use strict';

//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)
//
//  Example
// console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]));
//  should print: `[1, 11, 34, 52, 61]`

function unique(listOfNumbers: number[]): number[] {
  let listOfUniqueNumbers: number[] = [];
  listOfNumbers.forEach(function (value: number) {
    if (
      !listOfUniqueNumbers.some(function (element: number) {
        return element === value;
      })
    ) {
      listOfUniqueNumbers.push(value);
    }
  });
  return listOfUniqueNumbers;
}

console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]));
