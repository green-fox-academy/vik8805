'use strict';

import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

let thingFirst: Thing = new Thing(`Get milk`);
let thingSecond: Thing = new Thing(`Remove the obstacles`);
let thingThird: Thing = new Thing(`Stand up`);
let thingFourth: Thing = new Thing(`Eat lunch`);

fleet.add(thingFirst);
fleet.add(thingSecond);
fleet.add(thingThird);
fleet.add(thingFourth);

thingThird.complete();
thingFourth.complete();

console.log(fleet.toString());
