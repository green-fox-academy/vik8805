'use strict';
import { SumExercise } from './sum';
import * as test from 'tape';

let example = new SumExercise();

test(`should return 0 as the sum of an empty list`, (t) => {
  let actual: number = example.sum();
  let expected: number = 0;
  t.equal(actual, expected);
  t.end();
});

test(`should return the sum of a list that has one element in it`, (t) => {
  let actual: number = example.sum([5]);
  let expected: number = 5;
  t.equal(actual, expected);
  t.end();
});

test(`should return the sum of multiple elements given to the method as parameter`, (t) => {
  let actual: number = example.sum([1, 2, 3, 4]);
  let expected: number = 10;
  t.equal(actual, expected);
  t.end();
});
