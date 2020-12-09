'use strict';

export function anagramCheck(stringOne: string, stringTwo: string): boolean {
  let result: boolean = false;
  if (stringOne.toLowerCase() === stringTwo.split('').reverse().join('').toLowerCase()) {
    result = true;
  }
  return result;
}
