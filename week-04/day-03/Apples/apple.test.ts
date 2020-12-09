'use strict';
import { Apple } from './apple';
import * as test from 'tape';

let golden = new Apple();

test(`should get apple`, (t) => {
  let actual: string = golden.getApple();
  let expected: string = 'apples';
  t.equal(actual, expected);
  t.end();
});
