'use strict';

export abstract class Instrument {
  protected _name: string;
  constructor() {}
  public abstract play(): void;
}
