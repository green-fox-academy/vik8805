'use strict';
import { Pirate } from './pirate';

// Create a Ship class.
// The Ship stores Pirate-s instances in a list as the crew and has one captain who is also a Pirate.
// When a ship is created it doesn't have a crew or a captain.
// The ship can be filled with pirates and a captain via fillShip() method.
//  - Filling the ship with a captain and random number of pirates.

// Ships should be represented in a nice way on command line including information about
//  - captains consumed rum, state (passed out / died)
//  - number of alive pirates in the crew

// Ships should have a method to battle other ships: ship.battle(otherShip)
//  - should return true if the actual ship (this) wins
//  - the ship should win if its calculated score is higher
//  - calculate score: Number of Alive pirates in the crew - Number of consumed rum by the captain
//  - The loser crew has a random number of losses (deaths).
//  - The winner captain and crew has a party, including a random number of rum :)

export class Ship {
  private _captain: Pirate;
  private _crew: Pirate[];
  private _captainsDrunkness: number;
  private _captainsState: string;
  private _numberOfAlivePirates: number;

  constructor() {
    this._crew = [];
    this.fillShip();
  }

  public get numberOfAlivePirates(): number {
    return this._numberOfAlivePirates;
  }

  public get captainsDrunkness(): number {
    return this._captainsDrunkness;
  }

  public fillShip(): void {
    this._captain = new Pirate(true);
    this._captainsDrunkness = 0;
    this._captainsState = `alive`;
    for (let i: number = 0; i < Math.floor(Math.random() * 10) + 1 + 5; i++) {
      this._crew.push(new Pirate());
    }
    this._numberOfAlivePirates = 0;
    let numberOfAlivePirates: number = 0;
    this._crew.map(function (value: Pirate): number {
      if (!value.isDead) {
        numberOfAlivePirates++;
      }
      return numberOfAlivePirates;
    });
  }

  public battle(otherShip: Ship): boolean {
    if (this._numberOfAlivePirates - this._captainsDrunkness > otherShip._numberOfAlivePirates - otherShip._captainsDrunkness) {
      let losses: number = Math.floor(Math.random() * otherShip._numberOfAlivePirates) + 1;
      for (let i: number = 0; i < losses; i++) {
        otherShip._crew[i].die();
        otherShip._numberOfAlivePirates--;
      }
      let rum: number = Math.floor(Math.random() * 10) + 1 + 10;
      for (let j: number = 0; j < rum; j++) {
        if (Math.floor(Math.random() * 4) + 1 === 4) {
          this._captain.drinkSomeRum();
          this._captainsDrunkness += 1;
        } else {
          this._crew[Math.floor(Math.random() * this._crew.length)].drinkSomeRum();
        }
      }
      return true;
    }
    if (this._numberOfAlivePirates - this._captainsDrunkness <= otherShip._numberOfAlivePirates - otherShip._captainsDrunkness) {
      let losses: number = Math.floor(Math.random() * this._numberOfAlivePirates) + 1;
      for (let i: number = 0; i < losses; i++) {
        this._crew[i].die();
        this._numberOfAlivePirates--;
      }
      let rum: number = Math.floor(Math.random() * 10) + 1 + 10;
      for (let j: number = 0; j < rum; j++) {
        if (Math.floor(Math.random() * 4) + 1 === 4) {
          otherShip._captain.drinkSomeRum();
          otherShip._captainsDrunkness += 1;
        } else {
          otherShip._crew[Math.floor(Math.random() * otherShip._crew.length)].drinkSomeRum();
        }
      }
      return false;
    }
  }
}
