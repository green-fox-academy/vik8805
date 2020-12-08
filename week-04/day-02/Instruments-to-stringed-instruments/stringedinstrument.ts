'use strict';
import { Instrument } from './instrument';

export abstract class StringedInstrument extends Instrument {
  protected _numberOfStrings: number;
  constructor() {
    super();
  }
  public play(): void {
    console.log(`${this._name}, a ${this._numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
  public abstract sound(): void;
}
