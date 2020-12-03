'use strict';

// Create a Station and a Car classes
// Station
//  - gasAmount -> available gas amount of the gas station
//  - refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount

class Station {

  private _gasAmount: number;

  constructor(gasAmount: number) {
    this._gasAmount = gasAmount;
  };

  public refill(carToRefill: Car) {
    this._gasAmount -= (carToRefill.capacity - carToRefill.gasAmount);
    carToRefill.gasAmount += (carToRefill.capacity - carToRefill.gasAmount);
  };
};

// Car
//  - gasAmount -> gas amount of the car
//  - capacity -> capacity of the fuel tank
//  - create constructor for Car where:
//    * initialize gasAmount -> 0
//    * initialize capacity -> 100

class Car {

  private _gasAmount: number;
  private _capacity: number;

  constructor() {
    this._gasAmount = 0;
    this._capacity = 100;
  };

  public get capacity(): number {
    return this._capacity;
  };

  public get gasAmount(): number {
    return this._gasAmount;
  };

  public set gasAmount(gasAmount: number) {
      this._gasAmount = gasAmount;
  };
};

let MOL = new Station(1000);
let nissan = new Car();

console.log(nissan);
console.log(MOL);

nissan.gasAmount = 30;
console.log(nissan);

MOL.refill(nissan);

console.log(nissan);
console.log(MOL);