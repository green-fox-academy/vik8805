'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let remainingSeconds: number = 60 - currentSeconds + (59 - currentMinutes) * 60 + (23 - currentHours) * 3600;

console.log('Remaining seconds from the day:', remainingSeconds, 'seconds');
