'use strict';
import { Plant } from './plant';
import { Flower } from './flower';
import { Tree } from './tree';

class Garden {
  protected _garden: Plant[];
  constructor() {
    this._garden = [];
  }

  public createAnExampleGardenAndDemonstrate(): void {
    this._garden.push(
      ...[new Flower(`yellow`)],
      ...[new Flower(`blue`)],
      ...[new Tree(`purple`)],
      ...[new Tree(`orange`)]
    );
    this.situationReport();
    this.wateringGarden(40);
    this.situationReport();
    this.wateringGarden(70);
    this.situationReport();
  }

  public situationReport(): void {
    for (let i: number = 0; i < this._garden.length; i++) {
      if (this._garden[i].needsWater) {
        console.log(
          `The ${this._garden[i].color} ${this._garden[i].type} needs water`
        );
      } else {
        console.log(
          `The ${this._garden[i].color} ${this._garden[i].type} doesnt need water`
        );
      }
    }
    console.log(``);
  }

  public wateringGarden(amount: number): void {
    console.log(`Watering with ${amount}`);
    let needsOfWaterCounter: number = 0;
    for (let i: number = 0; i < this._garden.length; i++) {
      if (this._garden[i].needsWater) {
        needsOfWaterCounter += 1;
      }
    }
    for (let j: number = 0; j < this._garden.length; j++) {
      if (this._garden[j].needsWater) {
        this._garden[j].watering(amount / needsOfWaterCounter);
      }
    }
  }
}

let eden = new Garden();
eden.createAnExampleGardenAndDemonstrate();
