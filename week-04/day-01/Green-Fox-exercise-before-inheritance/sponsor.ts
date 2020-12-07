'use strict';
import { Person } from './person';
import { Student } from './student';
import { Mentor } from './mentor';
class Sponsor {
  private _name: string;
  private _age: number;
  private _gender: string;
  private _company: string;
  private _hiredStudents: number;
  constructor(name?: string, age?: number, gender?: string, company?: string) {
    this._name = name || `Jane Doe`;
    this._age = age || 30;
    this._gender = gender || `female`;
    this._company = company || `Google`;
    this._hiredStudents = 0;
  }
  public introduce() {
    console.log(
      `Hi, I'm ${this._name}, a ${this._age} year old ${this._gender} who represents ${this._company} and hired ${this._hiredStudents} students so far.`
    );
  }
  public getGoal() {
    console.log(`My goal is: Hire brilliant junior software developers.`);
  }
  public hire() {
    this._hiredStudents += 1;
  }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
people.push(sponsor);
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

people.forEach((person) => {
  person.introduce();
  person.getGoal();
});
