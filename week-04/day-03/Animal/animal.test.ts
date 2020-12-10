'use strict';

import * as test from 'tape';
import { Animal } from '../../../week-03/day-03/Encapsulation-and-constructor/animal';

test('eat() should decreases Animal hunger by one, so after eat, hunger default 50 should be 49', (t) => {
  let boci = new Animal('boci');
  boci.eat();
  t.equal(boci.hunger, 49);
  t.end();
});

test('drink() should decreases Animal thirst by one, so after drink, thirst default 50 should be 49', (t) => {
  let boci = new Animal('boci');
  boci.drink();
  t.equal(boci.thirst, 49);
  t.end();
});

test('play() should increases Animal thirst and hunger by one, so after play, thirst and hunger default 50 should be 51', (t) => {
  let boci = new Animal('boci');
  boci.play();
  t.equal(boci.hunger, 51);
  t.end();
});

test('play() should increases Animal thirst and hunger by one, so after play, thirst and hunger default 50 should be 51', (t) => {
  let boci = new Animal('boci');
  boci.play();
  t.equal(boci.thirst, 51);
  t.end();
});
