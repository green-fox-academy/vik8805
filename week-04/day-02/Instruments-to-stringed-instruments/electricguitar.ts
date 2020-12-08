'use strict';
import { StringedInstrument } from './stringedinstrument';

export class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings?: number) {
    super();
    this._name = `Electric Guitar`;
    this._numberOfStrings = numberOfStrings ?? 6;
  }
  public sound(): string {
    return `Twang`;
  }
}
