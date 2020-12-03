'use strict';

// Create Student and Teacher classes
// Student
//  - learn() -> prints the student is learning something new
//  - question(teacher) -> calls the teachers answer method

class Student {

  public learn() {
    console.log(`The student is learning something new.`);
  };

  public question(teacher) {
    teacher.answer();
  };

};

// Teacher
//  - teach(student) -> calls the students learn method
//  - answer() -> prints the teacher is answering a question

class Teacher {

  public teach(student) {
    student.learn();
  };

  public answer() {
    console.log(`The teacher is answering a question.`);
  };

};

// Instantiate a Student and Teacher object

let peti = new Student();
let laciBacsi = new Teacher();

// Call the student's question() method and the teacher's teach() method

peti.question(laciBacsi);
laciBacsi.teach(peti);