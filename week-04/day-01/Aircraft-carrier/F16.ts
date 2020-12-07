'use strict';
import { Aircraft } from './aircraft';

export class F16 extends Aircraft {
  constructor() {
    super();
    this._type = `F16`;
    this._isPriority = false;
    this._maxAmmo = 8;
    this._baseDamage = 30;
  }
}
