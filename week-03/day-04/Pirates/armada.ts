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
    let indexOfThisFleetsShip: number = 0;
    let indexOfOtherFleetsShip: number = 0;
    while (indexOfThisFleetsShip < this._numberOfShips && indexOfOtherFleetsShip < otherArmada._numberOfShips) {
      let shipOfThisFleet: Ship = this._fleet[indexOfThisFleetsShip];
      let shipOfOtherFleet: Ship = otherArmada._fleet[indexOfOtherFleetsShip];
      let battle = new BattleApp(shipOfThisFleet, shipOfOtherFleet);
      if (battle.battleResult) {
        indexOfOtherFleetsShip++;
        if (shipOfThisFleet.numberOfAlivePirates <= 0) {
          indexOfThisFleetsShip++;
        }
      } else {
        indexOfThisFleetsShip++;
        if (shipOfOtherFleet.numberOfAlivePirates <= 0) {
          indexOfOtherFleetsShip++;
        }
      }
    }
    if (indexOfOtherFleetsShip === otherArmada._numberOfShips) {
      return true;
    } else {
      return false;
    }
  }
}
