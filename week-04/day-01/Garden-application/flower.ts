'use strict';
import { Plant } from './plant';

export class Flower extends Plant {
  constructor(color: string) {
    super(color);
    this._maxNeedsOfWater = 5;
    this._type = `Flower`;
  }
  public watering(amount: number): void {
    amount *= 0.75;
    super.watering(amount);
  }
}
