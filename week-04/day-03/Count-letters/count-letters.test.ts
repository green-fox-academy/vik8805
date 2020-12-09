'use strict';
import { letterOccurance } from './count-letters';
import * as test from 'tape';

test(`should return all letters in the string as keys and number of occurrences as values`, (t) => {
  let actual = letterOccurance('AaAAA tttttTT qqq RRRR ');
  let expected = { a: 5, t: 7, q: 3, r: 4 };
  t.deepEqual(actual, expected);
  t.end();
});
