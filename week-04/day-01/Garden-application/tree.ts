'use strict';
import { Plant } from './plant';

export class Tree extends Plant {
  constructor(color: string) {
    super(color);
    this._maxNeedsOfWater = 10;
    this._type = `Tree`;
  }
  public watering(amount: number): void {
    amount *= 0.4;
    super.watering(amount);
  }
}
