'use strict';
import { Animal } from './animal';

export class Bird extends Animal {
  constructor(name: string, age: number, gender: string) {
    super();
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._skin = `feathers`;
  }
  public breed(): string {
    return `laying eggs`;
  }
  public move(): string {
    return `fly in the air`;
  }
}
