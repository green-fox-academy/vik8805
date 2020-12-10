'use strict';

import * as test from 'tape';
import { CAB } from './CAB';

test('should return 4 bull and congratulation, when all numbers found out', (t) => {
  let secretNumber: number[] = [1, 2, 3, 4];
  let game = new CAB(secretNumber);
  let actual: string = game.guess(secretNumber);
  let expected: string = `4 bull! Cogratulation, you win!`;
  t.equal(actual, expected);
  t.end();
});
test('should return 2 cow, 2 bull, when all four number are good, but two of them are on different position', (t) => {
  let secretNumber: number[] = [1, 2, 3, 4];
  let game = new CAB([1, 3, 2, 4]);
  let actual: string = game.guess(secretNumber);
  let expected: string = `2 cow, 2 bull`;
  t.equal(actual, expected);
  t.end();
});
test('should return 4 cow, when all four number found out, but on different positions', (t) => {
  let secretNumber: number[] = [1, 2, 3, 4];
  let game = new CAB([4, 3, 2, 1]);
  let actual: string = game.guess(secretNumber);
  let expected: string = `4 cow`;
  t.equal(actual, expected);
  t.end();
});
test('should return wrong guess, when all the given numbers are wrong', (t) => {
  let secretNumber: number[] = [1, 2, 3, 4];
  let game = new CAB([5, 6, 7, 8]);
  let actual: string = game.guess(secretNumber);
  let expected: string = `wrong guess`;
  t.equal(actual, expected);
  t.end();
});
