'use strict';
import { Armada } from './armada';

// Create a WarApp class, where you can fight with armadas
// Create 2 armadas, fill them with ships
// Have a war!

export class WarApp {
  private _armada: Armada;
  private _otherArmada: Armada;
  private _warResult: boolean;
  constructor(thisArmada: Armada, otherArmada: Armada) {
    this._armada = thisArmada;
    this._otherArmada = otherArmada;
    this._warResult = this._armada.war(this._otherArmada);
  }
}

let bigWar = new WarApp(new Armada(), new Armada());
console.log(bigWar);
