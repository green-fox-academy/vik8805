'use strict';

export class Student {
  private _name: string;
  private _age: number;
  private _gender: string;
  private _previousOrganization: string;
  private _skippedDays: number;
  constructor(
    name?: string,
    age?: number,
    gender?: string,
    previousOrganization?: string
  ) {
    this._name = name || `Jane Doe`;
    this._age = age || 30;
    this._gender = gender || `female`;
    this._previousOrganization = previousOrganization || `The School of Life`;
    this._skippedDays = 0;
  }
  public introduce() {
    console.log(
      `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`
    );
  }
  public getGoal() {
    console.log(`My goal is: Be a junior software developer.`);
  }
  public skipDays(numberOfDays) {
    this._skippedDays += numberOfDays;
  }
}
