'use strict';
import { Ship } from './ship';
import { BattleApp } from './battleapp';

// Create an Armada class
// Contains Ship-s as a list
// Have a armada.war(otherArmada) method where two armada can engage in war
//  - it should work like merge sort
//  - first ship from the first armada battles the first of the other
//  - the loser gets deleted so the next ship comes in play from that armada
//  - whichever armada gets to the end of its ships loses the war
//  - return true if this is the winner

export class Armada {
  private _fleet: Ship[];
  private _numberOfShips: number;
  constructor() {
    this._fleet = [];
    this._numberOfShips = Math.floor(Math.random() * 10) + 1 + 5;
    for (let i: number = 0; i < this._numberOfShips; i++) {
      this._fleet.push(new Ship());
    }
  }

  public war(otherArmada: Armada): boolean {
    let indexThis: number = 0;
    let indexOther: number = 0;
    while (
      indexThis < this._numberOfShips &&
      indexOther < otherArmada._numberOfShips
    ) {
      let shipOfThis: Ship = this._fleet[indexThis];
      let shipOfOther: Ship = otherArmada._fleet[indexOther];
      let battle = new BattleApp(shipOfThis, shipOfOther);
      if (battle.battleResult) {
        indexOther++;
        if (shipOfThis.numberOfAlivePirates <= 0) {
          indexThis++;
        }
      } else {
        indexThis++;
        if (shipOfOther.numberOfAlivePirates <= 0) {
          indexOther++;
        }
      }
    }
    if (indexOther === otherArmada._numberOfShips) {
      return true;
    } else {
      return false;
    }
  }
}
