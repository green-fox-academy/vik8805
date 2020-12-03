'use strict';

// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

quote = `${quote.slice(0, 21)}always takes longer than ${quote.slice(21)}`;

console.log(quote);
