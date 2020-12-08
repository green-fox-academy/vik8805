'use strict';
import { Printable } from './printable';

export class Todo implements Printable {
  protected _task: string;
  protected _priority: string;
  protected _isDone: boolean;
  constructor(task: string, priority: string) {
    this._task = task;
    this._priority = priority;
    this._isDone = false;
  }
  public printAllFields(): void {
    console.log(`Task: ${this._task} | Priority: ${this._priority} | Done: ${this._isDone}`);
  }
  public completeTask(): void {
    this._isDone = true;
  }
}
