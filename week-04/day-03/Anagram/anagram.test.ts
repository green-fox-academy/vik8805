'use strict';
import { anagramCheck } from './anagram';
import * as test from 'tape';

test(`should return true if the two strings given as parameters are anagramms`, (t) => {
  let actual: boolean = anagramCheck('dog', 'god');
  let expected: boolean = true;
  t.equal(actual, expected);
  t.end();
});

test(`should return true if the two strings given as parameters are anagramms, but with different case of the characters`, (t) => {
  let actual: boolean = anagramCheck('DOG', 'god');
  let expected: boolean = true;
  t.equal(actual, expected);
  t.end();
});

test(`should return false if the two strings given as parameters are not anagramms`, (t) => {
  let actual: boolean = anagramCheck('peti', 'god');
  let expected: boolean = false;
  t.equal(actual, expected);
  t.end();
});
