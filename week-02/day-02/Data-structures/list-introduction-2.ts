'use strict';
export {};

// Create a list ('List A') which contains the following values:
// Apple, Avocado, Blueberries, Durian, Lychee
let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

// Create a new list ('List B') with the values of List A
let listB: string[] = listA.map(function (element: string): string {
  return element;
});

// Print out whether List A contains Durian or not
  // My first solution:
let checker: boolean = false;

listA.forEach(function (element: string) {
  if (element === 'Durian') {
    checker = true;
  };
});

if (checker) {
  console.log(`List A contains Durian\r\n`);
} else {
  console.log(`Durian doesn't exist in List A!\r\n`);
};

  // My second solution
function checkDurian(element: string): boolean {
  return (element === `Durian`);
};

let check: boolean = listA.some(checkDurian);
if (check) {
  console.log(`List A contains Durian\r\n`);
} else {
  console.log(`Durian doesn't exist in List A!\r\n`);
};

// Remove Durian from List B
listB.forEach(function (element: string, index: number) {
  if (element === 'Durian') {
    listB.splice(index, 1);
  };
});

// Add Kiwifruit to List A after the 4th element
listA.splice(4, 0, `Kiwifruit`);

// Compare the size of List A and List B
if (listA.length > listB.length) {
  console.log(`List A is longer, than List B\r\n`);
  
} else {
  console.log(`List B is longer, than List A\r\n`);
};

// Get the index of Avocado from List A
console.log(`The Avocado is on the ${listA.indexOf(`Avocado`, 0)} index in List A\r\n`);

// Get the index of Durian from List B
if (listB.indexOf(`Durian`, 0) === -1) {
  console.log(`The Durian doesn't exist in List B!\r\n`);
} else {
  console.log(`The Durian is on the ${listB.indexOf(`Durian`, 0)} index in List B\r\n`);
};

// Add Passion Fruit and Pomelo to List B in a single statement
listB.push(`Passion Fruit`, `Pomelo`);

// Print out the 3rd element from List A
console.log(`The 3rd element in List A is ${listA[2]}`);