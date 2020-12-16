'use strict';

// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

let numbers: number[] = [3, 4, 5, 6, 7];

//	   -  do it with creating a new temp array and a loop
let tempArray: number[] = [];
for (let i: number = 0; i < numbers.length; i++) {
  tempArray.push(numbers[numbers.length - i - 1]);
}

console.log(tempArray);

// 	   -  do it with the built in method
console.log(numbers.reverse());
