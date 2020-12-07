'use strict';
import { Person } from './person-after-inheri';

export class Sponsor extends Person {
  protected _company: string;
  protected _hiredStudents: number;
  constructor(name?: string, age?: number, gender?: string, company?: string) {
    super(name, age, gender);
    this._company = company || `Google`;
    this._hiredStudents = 0;
  }
  public introduce(): void {
    super.introduce();
    console.log(
      ` who represents ${this._company} and hired ${this._hiredStudents} students so far.`
    );
  }
  public getGoal(): void {
    console.log(`My goal is: Hire brilliant junior software developers.`);
  }
  public hire(): void {
    this._hiredStudents += 1;
  }
}
