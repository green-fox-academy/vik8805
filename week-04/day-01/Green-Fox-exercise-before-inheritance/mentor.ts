'use strict';

export class Mentor {
  private _name: string;
  private _age: number;
  private _gender: string;
  private _level: string;
  constructor(name?: string, age?: number, gender?: string, level?: string) {
    this._name = name || `Jane Doe`;
    this._age = age || 30;
    this._gender = gender || `female`;
    this._level = level || `intermediate`;
  }
  public introduce() {
    console.log(
      `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} ${this._level} mentor.`
    );
  }
  public getGoal() {
    console.log(`My goal is: Educate brilliant junior software developers.`);
  }
}
