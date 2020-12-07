'use strict';

export class Plant {
  protected _color: string;
  protected _type: string;
  protected _needsWater: boolean;
  protected _amountOfWater: number;
  protected _maxNeedsOfWater: number;
  constructor(color: string) {
    this._color = color;
    this._amountOfWater = 0;
    this._needsWater = true;
  }

  public get needsWater() {
    return this._needsWater;
  }
  public get color() {
    return this._color;
  }
  public get type() {
    return this._type;
  }

  public watering(amount: number): void {
    this._amountOfWater += amount;
    if (this._amountOfWater >= this._maxNeedsOfWater) {
      this._needsWater = false;
    }
  }
}
