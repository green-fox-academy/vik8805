'use strict';
import { Ship } from './ship';

// Create a BattleApp class, where you can fight with ships
// Create 2 ships, fill them with pirates
// Have a battle!

export class BattleApp {
  private _ship: Ship;
  private _otherShip: Ship;
  private _battleResult: boolean;
  constructor(thisShip: Ship, otherShip: Ship) {
    this._ship = thisShip;
    this._otherShip = otherShip;
    this._battleResult = this._ship.battle(this._otherShip);
  }

  public get battleResult(): boolean {
    return this._battleResult;
  }
}
