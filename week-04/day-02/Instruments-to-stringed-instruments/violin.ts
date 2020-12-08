'use strict';
import { StringedInstrument } from './stringedinstrument';

export class Violin extends StringedInstrument {
  constructor() {
    super();
    this._name = `Violin`;
    this._numberOfStrings = 4;
  }
  public sound(): string {
    return `Screech`;
  }
}
