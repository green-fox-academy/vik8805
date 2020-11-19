'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let dailycode: number = 6; // daily coding hours
let semester: number = 17; // weeks of a semester
let workdays: number = semester * 5; // workdays of a semester

console.log(workdays * dailycode, 'hours spent with coding in a semester by an attendee');

let workhours: number = 52; // workhours weekly in a semester
let percent: number = dailycode / (workhours / 5) * 100;

console.log('In a semester the coding hours is', percent, '% of the work hours');