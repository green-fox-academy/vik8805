'use strict';

export abstract class Vehicle {
  protected _type: string;
  protected _age: number;
  protected _numberOfPassengers: number;
  constructor(type: string, age: number, numberOfPassengers: number) {
    this._type = type;
    this._age = age;
    this._numberOfPassengers = numberOfPassengers;
  }
}
