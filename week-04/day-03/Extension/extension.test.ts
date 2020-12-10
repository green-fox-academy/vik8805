'use strict';

import * as test from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('should add two numbers and return the value', (t) => {
  t.equal(add(3, 6), 9);
  t.end();
});

test('should return 8 as the highest number of the given 3 values', (t) => {
  t.equal(maxOfThree(5, 4, 8), 8);
  t.end();
});

test('should return 5 as the highest number of the given 3 values', (t) => {
  t.equal(maxOfThree(4, 5, 3), 5);
  t.end();
});

test('should return the median of a list of numbers, when the length of list is an odd number', (t) => {
  t.equal(median([7, 5, 10, 5, 8]), 10);
  t.end();
});

test('should return the median of a list of numbers, when the length of list is an even number', (t) => {
  t.equal(median([4, 2, 8, 4, 6, 5]), 6);
  t.end();
});

test('is vowel: A', (t) => {
  t.ok(isVowel('A'));
  t.end();
});

test('is vowel: U', (t) => {
  t.ok(isVowel('U'));
  t.end();
});

test('is vowel: K', (t) => {
  t.notOk(isVowel('K'));
  t.end();
});

test('translate: HOLARIHO', (t) => {
  t.equal(translate('HOLARIHO'), 'HOVOLAVARIVIHOVO');
  t.end();
});

test('translate: lagOpus', (t) => {
  t.equal(translate('lagOpus'), 'lavagOVOpuvus');
  t.end();
});
