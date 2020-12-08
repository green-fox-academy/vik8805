'use strict';
import { Domino } from './domino';
import { Todo } from './todo';

let dominoes: Domino[] = [];
dominoes.push(...[new Domino(3, 2)], ...[new Domino(4, 6)], ...[new Domino(1, 5)], ...[new Domino(6, 7)], ...[new Domino(2, 4)], ...[new Domino(7, 1)]);
let todos: Todo[] = [];
todos.push(...[new Todo('Buy milk', 'high')], ...[new Todo('Do fractal exercises', 'low'), ...[new Todo('Sleep', 'very high')]]);
todos[0].completeTask();

for (let domino of dominoes) {
  domino.printAllFields();
}

for (let todo of todos) {
  todo.printAllFields();
}
