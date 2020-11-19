'use strict';
export { }

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let length: number = 10;
let height: number = 10;
let width: number = 10;

let surfArea: number = 2 * length * width + 2 * length * height + 2 * height * width;
let volume: number = length * height * width;

console.log('Surface Area:', surfArea);
console.log('Volume:', volume);


