'use strict';

export abstract class Animal {
  protected _name: string;
  protected _gender: string;
  protected _age: number;
  protected _skin: string;
  constructor() {}
  public getName(): string {
    return this._name;
  }
  public getAge(): number {
    return this._age;
  }
  public getGender(): string {
    return this._gender;
  }
  public getSkin(): string {
    return this._skin;
  }
  public abstract breed(): void;
  public abstract move(): void;
}
