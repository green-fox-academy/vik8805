'use strict';
import { Animal } from '../../day-03/Encapsulation-and-constructor/animal';

// Reuse your Animal class
// Create a Farm class
//  - it has list of Animals
//  - it has slots which defines the number of free places for animals
//  - breed() -> creates a new animal if there's place for it
//  - slaughter() -> removes the least hungry animal

class Farm {
  private _animals: Animal[] = [];
  private _freePlaces: number;

  constructor(freePlaces?: number) {
    this._freePlaces = freePlaces || 5;
  }

  public get freePlaces(): number {
    return this._freePlaces;
  }

  public get animals(): Animal[] {
    return this._animals;
  }

  public breed(name: string): void {
    if (this.freePlaces > 0) {
      this._animals.push(new Animal(`${name}`));
      this._freePlaces -= 1;
    } else {
      console.log(`You run out of free spaces on your farm!`);
    }
  }

  public slaughter() {
    let leastHungry: Animal = this.animals[0];
    for (let i: number = 1; i < this.animals.length; i++) {
      if (this.animals[i].hunger < leastHungry.hunger) {
        leastHungry = this.animals[i];
      }
    }
    this._animals.splice(this._animals.indexOf(leastHungry), 1);
  }
}
// TEST
let myFarm = new Farm();
console.log(myFarm);

myFarm.breed(`pipi`);
myFarm.breed(`kacsa`);
myFarm.breed(`boci`);
myFarm.breed(`paci`);
myFarm.breed(`malac`);
console.log(myFarm);

myFarm.breed(`bari`);

myFarm.animals[0].play(10);
myFarm.animals[1].play(30);
myFarm.animals[2].play(21);
myFarm.animals[3].play(45);
myFarm.animals[4].play(5);
console.log(myFarm);

myFarm.slaughter();
console.log(myFarm);
