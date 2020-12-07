'use strict';
import { Person } from './person-after-inheri';

export class Student extends Person {
  protected _previousOrganization: string;
  protected _skippedDays: number;
  constructor(
    name?: string,
    age?: number,
    gender?: string,
    previousOrganization?: string
  ) {
    super(name, age, gender);
    this._previousOrganization = previousOrganization || `The School of Life`;
    this._skippedDays = 0;
  }
  public introduce(): void {
    super.introduce();
    console.log(
      ` from ${this._previousOrganization} who skipped ${this._skippedDays} days from the course already.`
    );
  }
  public getGoal(): void {
    console.log(`My goal is: Be a junior software developer.`);
  }
  public skipDays(numberOfDays): void {
    this._skippedDays += numberOfDays;
  }
}
