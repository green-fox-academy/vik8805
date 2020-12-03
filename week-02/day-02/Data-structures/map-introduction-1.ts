'use strict';

// Create an empty map where the keys are integers and the values are characters
let map: object = {};

// Print out whether the map is empty or not
if (!Object.keys(map).length) {
  console.log(`The map is empty.\r\n`);
} else {
  console.log(`The map is not empty.\r\n`);
}

// Add the following key-value pairs to the map
//    Key	Value
//    97	a
//    98	b
//    99	c
//    65	A
//    66	B
//    67	C
map[97] = 'a';
map[98] = 'b';
map[99] = 'c';
map[65] = 'A';
map[66] = 'B';
map[67] = 'C';

// Print all the keys
console.log(`Keys of map: ${Object.keys(map)}\r\n`);

// Print all the values
let values: string = '';
for (let key in map) {
  values += map[key] + ',';
}
console.log(`Values of map: ${values}\r\n`);

// Add value D with the key 68
map[68] = 'D';

// Print how many key-value pairs are in the map
let counter: number = 0;
Object.keys(map).forEach(function (element: string) {
  if (map[element]) {
    counter += 1;
  } else {
    console.log(`The ${element} key of map is without a value!\r\n`);
  }
});
console.log(`Key-value pairs in the map: ${counter}\r\n`);

// Print the value that is associated with key 99
console.log(`The 99 key's value is ${map[99]}\r\n`);

// Remove the key-value pair where with key 97
delete map[97];

// Print whether there is an associated value with key 100 or not
let checker: boolean = false;
for (let key in map) {
  if (key === '100') {
    checker = true;
  }
}

if (checker) {
  if (map[100]) {
    console.log(`The 100 key's value is ${map[100]}\r\n`);
  } else {
    console.log(`The ${100} key of map is without a value!\r\n`);
  }
} else {
  console.log(`Key 100 doesn't exist!\r\n`);
}

// Remove all the key-value pairs
let objLength: number = Object.keys(map).length;
for (let i: number = 0; i < objLength; i++) {
  delete map[Object.keys(map)[0]];
}
