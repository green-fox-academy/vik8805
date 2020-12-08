'use strict';

// Create a Pirate class. While you can add other fields and methods, you must have these methods:
//  - drinkSomeRum() - intoxicates the Pirate some
//  - howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
//    * 0 to 4 times, "Pour me anudder!"
//    * else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
//
// If you manage to get this far, then you can try to do the following.
//  - die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead.
//  - brawl(x) - where pirate fights another pirate (if that other pirate is alive)
//    and there's a 1/3 chance, 1 dies, the other dies or they both pass out.
//
// And... if you get that far...
// Add a parrot.

export class Pirate {
  private _drunkenness: number;
  private _isDead: boolean;
  private _isPassedOut: boolean;
  private _isCaptain: boolean;

  constructor(isCaptain?: boolean) {
    this._isCaptain = isCaptain || false;
    this._drunkenness = 0;
    this._isDead = false;
    this._isPassedOut = false;
  }

  public get isDead(): boolean {
    return this._isDead;
  }

  public drinkSomeRum(): void {
    if (!this._isDead) {
      this._drunkenness += 1;
    } else {
      console.log(`He's dead.`);
    }
  }

  public howsItGoingMate(): void {
    if (!this._isDead) {
      if (this._drunkenness <= 4) {
        console.log(`Pour me anudder!`);
      } else {
        console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`);
        this._isPassedOut = true;
      }
    } else {
      console.log(`He's dead.`);
    }
  }

  public die(): void {
    this._isDead = true;
    this._isPassedOut = false;
  }

  public brawl(otherPirate: Pirate): void {
    if (!this._isDead && !otherPirate._isDead) {
      let chance: number = Math.floor(Math.random() * 3) + 1;
      if (chance === 1) {
        this._isDead = true;
      } else if (chance === 2) {
        otherPirate._isDead = true;
      } else if (chance === 3) {
        this._isPassedOut = true;
        otherPirate._isPassedOut = true;
      }
    } else {
      console.log(`Dead pirate can't fight!`);
    }
  }
}
