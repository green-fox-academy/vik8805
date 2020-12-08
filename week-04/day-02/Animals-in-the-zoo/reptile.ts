'use strict';
import { Animal } from './animal';

export class Reptile extends Animal {
  constructor(name: string, age: number, gender: string) {
    super();
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._skin = `scales`;
  }
  public breed(): string {
    return `laying eggs`;
  }
  public move(): string {
    return `walks on the ground`;
  }
}
