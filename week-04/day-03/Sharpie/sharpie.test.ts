'use strict';

import * as test from 'tape';
import { Sharpie } from '../../../week-03/day-03/Encapsulation-and-constructor/sharpie';

let blueSharpie = new Sharpie('blue', 10);

test('Every sharpie object should be created with a default 100 as inkAmount', (t) => {
  t.equal(blueSharpie.inkAmount, 100);
  t.end();
});

test('use(8) should decreases inkAmount by 80', (t) => {
  let defaultInkAmount: number = blueSharpie.inkAmount;
  blueSharpie.use(8);
  t.equal(defaultInkAmount - blueSharpie.inkAmount, 80);
  t.end();
});
