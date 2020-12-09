'use strict';
import { fibonacci } from './fibonacci';
import * as test from 'tape';

test(`should return 0 on index number 0`, (t) => {
  let actual: number = fibonacci(0);
  let expected: number = 0;
  t.equal(actual, expected);
  t.end();
});

test(`should return 1 on index number 1`, (t) => {
  let actual: number = fibonacci(1);
  let expected: number = 1;
  t.equal(actual, expected);
  t.end();
});

test(`should return 1 on index number 2`, (t) => {
  let actual: number = fibonacci(2);
  let expected: number = 1;
  t.equal(actual, expected);
  t.end();
});

test(`should return 6765 on index number 20`, (t) => {
  let actual: number = fibonacci(20);
  let expected: number = 6765;
  t.equal(actual, expected);
  t.end();
});
