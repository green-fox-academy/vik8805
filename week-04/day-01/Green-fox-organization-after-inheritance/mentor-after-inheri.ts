'use strict';
import { Person } from './person-after-inheri';

export class Mentor extends Person {
  protected _level: string;
  constructor(name?: string, age?: number, gender?: string, level?: string) {
    super(name, age, gender);
    this._level = level || `intermediate`;
  }
  public introduce(): void {
    super.introduce();
    console.log(` ${this._level} mentor.`);
  }
  public getGoal(): void {
    console.log(`My goal is: Educate brilliant junior software developers.`);
  }
}
