'use strict';

export class Person {
  private _name: string;
  private _age: number;
  private _gender: string;
  constructor(name?: string, age?: number, gender?: string) {
    this._name = name || `Jane Doe`;
    this._age = age || 30;
    this._gender = gender || `female`;
  }
  public introduce() {
    console.log(
      `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender}.`
    );
  }
  public getGoal() {
    console.log(`My goal is: Live for the moment!`);
  }
}
