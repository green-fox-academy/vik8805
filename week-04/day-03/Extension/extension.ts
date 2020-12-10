'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  let listOfNumbers: number[] = [a, b, c];
  let highest: number = 0;
  for (let i: number = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers[i] > highest) {
      highest = listOfNumbers[i];
    }
  }
  return highest;
}

export function median(pool: number[]): number {
  if (pool.length % 2) {
    return pool[(pool.length - 1) / 2];
  } else {
    return (pool[pool.length / 2 - 1] + pool[pool.length / 2]) / 2;
  }
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].some((vowel: string) => vowel === character.toLowerCase());
}

export function translate(hungarian: string): string {
  let teve: string = hungarian;
  let length: number = teve.length;
  let occuredVowels: string[] = [];
  for (let i: number = 0; i < length; i++) {
    let c: string = teve[i];
    if (isVowel(c) && occuredVowels.indexOf(c) === -1) {
      if (c === c.toLowerCase()) {
        teve = teve.split(c).join(`${c}v${c}`);
        i += 2;
        length += 2;
      } else {
        teve = teve.split(c).join(`${c}V${c}`);
        i += 2;
        length += 2;
      }
      occuredVowels.push(c);
    }
  }
  return teve;
}

// Check out the folder. There's a work file and a test file.

//  -  Run the tests, all 10 should be green (passing).
//  -  The implementations though are not quite good.
//  -  Create tests that'll fail, and will show how the implementations are wrong(You can assume that the implementation of join and split are good)
//  -  After creating the tests, fix the implementations
//  -  Check again, if you can create failing tests
//  -  Implement if needed
