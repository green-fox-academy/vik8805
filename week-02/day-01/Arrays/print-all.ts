'use strict';

// -  Create a variable named `numbers` with the following content: `[4, 5, 6, 7]`
// -  Log each the element of `numbers` to the console*
// *hint: use a loop, console.log(numbers) won't cut it
// -  bonus for using the correct built in array method

let numbers: number[] = [4, 5, 6, 7];
let elementsOfNumbers: string = '';

numbers.forEach(function (element: number) {
  elementsOfNumbers += `${element} `;
});

console.log(`The elements of numbers are: ${elementsOfNumbers}`);