'use strict';

// We are going to represent our expenses in a list containing integers.
//
//  - Create a list with the following items.
//    - 500, 1000, 1250, 175, 800 and 120
//
//  - Create an application which solves the following problems.
//    - How much did we spend?
//    - Which was our greatest expense?
//    - Which was our cheapest spending?
//    - What was the average amount of our spendings?

let listOfExpenses: number[] = [500, 1000, 1250, 175, 800, 120];

let app: object = {
  'How much did we spend?': spentAll(listOfExpenses),
  'Which was our greatest expense?': greatestSpend(listOfExpenses),
  'Which was our cheapest spending?': smallestSpend(listOfExpenses),
  'What was the average amount of our spendings?': averageSpend(listOfExpenses),
};

function spentAll(listOfNumbers: number[]): number {
  return listOfNumbers.reduce(function (valueOne: number, valueTwo: number): number {
    return valueOne + valueTwo;
  });
}

function greatestSpend(listOfNumbers: number[]): number {
  let greatestNumber: number = 0;
  listOfNumbers.map(function (value: number): number {
    if (value > greatestNumber) {
      greatestNumber = value;
    }
    return greatestNumber;
  });
  return greatestNumber;
}

function smallestSpend(listOfNumbers: number[]): number {
  let smallestNumber: number = greatestSpend(listOfNumbers);
  listOfNumbers.map(function (value: number): number {
    if (value < smallestNumber) {
      smallestNumber = value;
    }
    return smallestNumber;
  });
  return smallestNumber;
}

function averageSpend(listOfNumbers: number[]): number {
  return spentAll(listOfNumbers) / listOfNumbers.length;
}

console.log(app);
