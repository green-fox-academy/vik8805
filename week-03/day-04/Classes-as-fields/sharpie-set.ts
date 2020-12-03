'use strict';
import { Sharpie } from '../../day-03/Encapsulation-and-constructor/sharpie';

// Reuse your Sharpie class
// Create SharpieSet class
//  - it contains a list of Sharpie
//  - countUsable() -> sharpie is usable if it has ink in it
//  - removeTrash() -> removes all unusable sharpies

class SharpieSet {
  private _listOfSharpie: Sharpie[] = [];

  public get listOfSharpie(): Sharpie[] {
    return this._listOfSharpie;
  }

  public addToList(sharpieToAdd: Sharpie): void {
    this._listOfSharpie.push(sharpieToAdd);
  }

  public countUsable(indexOfSharpieToCheck: number): boolean {
    if (this.listOfSharpie[indexOfSharpieToCheck].inkAmount === 0) {
      return false;
    } else {
      return true;
    }
  }

  public removeTrash() {
    for (let i = 0; i < this.listOfSharpie.length; i++) {
      if (!this.countUsable(i)) {
        this.listOfSharpie.splice(i, 1);
      }
    }
  }
}

let drawer = new SharpieSet();
let sharpieBlue = new Sharpie('blue', 1);
let sharpieRed = new Sharpie('red', 2);
let sharpieGreen = new Sharpie('green', 3);
let sharpieYellow = new Sharpie('yellow', 2);
let sharpiePink = new Sharpie('pink', 3);

console.log(drawer);

drawer.addToList(sharpieBlue);
drawer.addToList(sharpieRed);
drawer.addToList(sharpieGreen);
drawer.addToList(sharpieYellow);
drawer.addToList(sharpiePink);

console.log(drawer);

sharpiePink.use();
sharpieGreen.use(3);
sharpieRed.use(6);
sharpieBlue.use(10);
sharpieYellow.use(10);

console.log(drawer);

drawer.removeTrash();

console.log(drawer);
