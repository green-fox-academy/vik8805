'use strict';
import { Bird } from './bird';
import { Helicopter } from './helicopter';

let ch47Chinook = new Helicopter('CH-47 Chinook', 60, 30);
let flamingo = new Bird('Flamingo', 4, 'female');

ch47Chinook.takeOff();
ch47Chinook.fly();
ch47Chinook.land();

console.log('\r\n');

flamingo.takeOff();
flamingo.fly();
flamingo.land();
