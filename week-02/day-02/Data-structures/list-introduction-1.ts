'use strict';

// Create an empty list which will contain names (strings)
let names: string[] = [];

// Print out the number of elements in the list
console.log(names.length);

// Add William to the list
names.push(`William`);

// Print out whether the list is empty or not
console.log(names);

// Add John to the list
names.push(`John`);

// Add Amanda to the list
names.push(`Amanda`);

// Print out the number of elements in the list
console.log(names.length);

// Print out the 3rd element
console.log(names[2]);

// Iterate through the list and print out each name
//    William
//    John
//    Amanda
names.forEach(function (value: string) {
  console.log(value);
})

// Iterate through the list and print
//    1. William
//    2. John
//    3. Amanda
names.forEach(function (value: string, index: number) {
  console.log(index += 1, value);
})

// Remove the 2nd element
names.splice(1);

// Iterate through the list in a reversed order and print out each name
//    Amanda
//    William
names.forEach(function (value: string) {
  console.log(value);
})

// Remove all elements
names.splice(0, names.length);