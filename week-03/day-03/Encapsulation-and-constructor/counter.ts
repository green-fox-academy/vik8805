'use strict';

//  Create a Counter class
//    - which has an integer property
//    - when creating an instance, it should have a default value 0 or we can specify it when creating
//    - we can add(number) to increase the counter's value by a whole number
//    - or we can add() without parameters just increasing the counter's value by one
//    - and we can get() the current value as string
//    - also we can reset() the value to the initial value
//  use export Counter at the end of your file
//  Check if everything is working fine with the proper test
//    - Download counter.test.js and place it next to your solution
//    - Run npm install tape @types/tape --save-dev in the root of your repository folder
//      (where you have a package-lock.json file already)
//    - Run the test file with ts-node

export class Counter {
  private _numberToUse: number;
  private _initialNumber: number;

  constructor(numberToUse?: number) {
    if (numberToUse === undefined) {
      this._numberToUse = 0;
      this._initialNumber = 0;
    } else {
      this._numberToUse = numberToUse;
      this._initialNumber = numberToUse;
    }
  }

  public add(increaseByNumb?: number) {
    if (increaseByNumb === undefined) {
      this._numberToUse += 1;
    } else {
      this._numberToUse += increaseByNumb;
    }
  }

  public get(): number {
    return this._numberToUse;
  }

  public reset() {
    this._numberToUse = this._initialNumber;
  }
}
