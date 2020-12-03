'use strict';

// Create an Animal class
//  - Every animal has a hunger value, which is a whole number
//  - Every animal has a thirst value, which is a whole number
//  - when creating a new animal object these values are created with the default 50 value
//  - Every animal can eat() which decreases their hunger by one
//  - Every animal can drink() which decreases their thirst by one
//  - Every animal can play() which increases both by one

export class Animal {
  private _name: string;
  private _hunger: number;
  private _thirst: number;

  constructor(name: string) {
    this._name = name;
    this._hunger = 50;
    this._thirst = 50;
  }

  public eat(timesToUse?: number) {
    this._hunger -= 1 * (timesToUse || 1);
  }

  public drink(timesToUse?: number) {
    this._thirst -= 1 * (timesToUse || 1);
  }

  public play(timesToUse?: number) {
    this._hunger += 1 * (timesToUse || 1);
    this._thirst += 1 * (timesToUse || 1);
  }

  public get hunger(): number {
    return this._hunger;
  }
}
