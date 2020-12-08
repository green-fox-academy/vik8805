'use strict';
import { Reservation } from './reservation';

for (let i: number = 0; i < 10; i++) {
  let res = new Reservation();
  console.log(res.print());
}
