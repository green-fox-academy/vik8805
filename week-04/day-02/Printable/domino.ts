'use strict';
import { Printable } from './printable';

export class Domino implements Printable {
  protected _sideA: number;
  protected _sideB: number;
  constructor(sideA: number, sideB: number) {
    this._sideA = sideA;
    this._sideB = sideB;
  }
  public printAllFields(): void {
    console.log(`Domino A side: ${this._sideA}, B side: ${this._sideB}`);
  }
}
