'use strict';
import { Animal } from '../Animals-in-the-zoo/animal';
import { flyable } from './flyable';

export class Bird extends Animal implements flyable {
  constructor(name: string, age: number, gender: string) {
    super();
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._skin = `feathers`;
  }
  public takeOff(): void {
    console.log(`3 - 2 - 1 - FELSZÁLLÁS!`);
  }
  public fly(): void {
    console.log(`I belive I can fly...`);
  }
  public land(): void {
    console.log(`ÁÁÁáááááá.... PLACCS!`);
  }
  public breed(): string {
    return `laying eggs`;
  }
  public move(): string {
    return `fly in the air`;
  }
}
