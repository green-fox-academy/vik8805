'use strict';

// Create an empty list which will contain names (strings)
let names: string[] = [];

// Print out the number of elements in the list
console.log(`The number of elements in the list: ${names.length}\n`);

// Add William to the list
names.push(`William`);

// Print out whether the list is empty or not
if (names.length > 0) {
  console.log(`The list is not empty.\n`);
} else {
  console.log(`The list is empty.\n`);
};

// Add John to the list
names.push(`John`);

// Add Amanda to the list
names.push(`Amanda`);

// Print out the number of elements in the list
console.log(`The number of elements in the list: ${names.length}\n`);

// Print out the 3rd element
console.log(`The 3rd element is: ${names[2]}\n`);

// Iterate through the list and print out each name
//    William
//    John
//    Amanda
console.log(`Elements of the list:`);
names.forEach(function (value: string) {
  console.log(` - ${value}`);
});

// Iterate through the list and print
//    1. William
//    2. John
//    3. Amanda
console.log(`\nElements of the list:`);
names.forEach(function (value: string, index: number) {
  console.log(` ${index += 1}. ${value}`);
});

// Remove the 2nd element
names.splice(1, 1);

// Iterate through the list in a reversed order and print out each name
//    Amanda
//    William
names = names.reverse();
console.log(`\nElements of the list in a reversed order:`);
names.forEach(function (value: string) {
  console.log(` - ${value}`);
});

// Remove all elements
names.splice(0, names.length);