'use strict';
import { StringedInstrument } from './stringedinstrument';

export class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings?: number) {
    super();
    this._name = `Bass Guitar`;
    this._numberOfStrings = numberOfStrings ?? 4;
  }
  public sound(): string {
    return `Duum-duum-duum`;
  }
}
