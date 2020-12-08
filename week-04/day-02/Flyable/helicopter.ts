'use strict';
import { Vehicle } from './vehicle';
import { flyable } from './flyable';

export class Helicopter extends Vehicle implements flyable {
  constructor(type: string, age: number, numberOfPassengers: number) {
    super(type, age, numberOfPassengers);
  }
  public takeOff(): void {
    console.log(`3 - 2 - 1 - 0 "Ta-Ta-Ta-Ta-Ta-Ta-Ta-Ta"`);
  }
  public fly(): void {
    console.log(`"Ta-Ta-Ta-Ta-Ta-Ta-Ta-Ta"`);
  }
  public land(): void {
    console.log(`Segítség segítség segítség!`);
  }
}
