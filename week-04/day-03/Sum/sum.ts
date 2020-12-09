'use strict';

export class SumExercise {
  protected _listOfNumbers: number[];
  constructor() {}
  public sum(number?: number[]): number {
    this._listOfNumbers = number || [];
    return this._listOfNumbers.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  }
}
