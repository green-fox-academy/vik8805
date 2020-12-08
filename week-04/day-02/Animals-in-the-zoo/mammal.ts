'use strict';
import { Animal } from './animal';

export class Mammal extends Animal {
  constructor(name: string, age: number, gender: string) {
    super();
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._skin = `fur`;
  }
  public breed(): string {
    return `pushing miniature versions out`;
  }
  public move(): string {
    return `walks on the ground`;
  }
}
