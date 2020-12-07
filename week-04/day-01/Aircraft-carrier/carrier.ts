'use strict';

import { Aircraft } from './aircraft';
import { F16 } from './F16';
import { F35 } from './F35';

class Carrier {
  protected _aircrafts: Aircraft[];
  protected _storeOfAmmo: number;
  protected _health: number;
  constructor(storeOfAmmo: number, health: number) {
    this._aircrafts = [];
    this._storeOfAmmo = storeOfAmmo;
    this._health = health;
  }
  public add() {
    let random: number = Math.floor(Math.random() * 2);
    if (random) {
      this._aircrafts.push(new F16());
    } else {
      this._aircrafts.push(new F35());
    }
  }

  public fill() {
    let neededAmmo: number = 0;
    for (let i: number = 0; i < this._aircrafts.length; i++) {
      neededAmmo += this._aircrafts[i].maxAmmo - this._aircrafts[i].ammo;
    }
    if (this._storeOfAmmo) {
      if (neededAmmo <= this._storeOfAmmo) {
        for (let j: number = 0; j < this._aircrafts.length; j++) {
          let ammoToLoad: number =
            this._aircrafts[j].maxAmmo - this._aircrafts[j].ammo;
          this._aircrafts[j].refill(this._storeOfAmmo);
          this._storeOfAmmo -= ammoToLoad;
        }
      } else {
        for (let k: number = 0; k < this._aircrafts.length; k++) {
          let ammoToLoad: number =
            this._aircrafts[k].maxAmmo - this._aircrafts[k].ammo;
          if (this._aircrafts[k].isPriority) {
            this._aircrafts[k].refill(this._storeOfAmmo);
            this._storeOfAmmo -= ammoToLoad;
          }
        }
        for (let l: number = 0; l < this._aircrafts.length; l++) {
          let ammoToLoad: number =
            this._aircrafts[l].maxAmmo - this._aircrafts[l].ammo;
          if (!this._aircrafts[l].isPriority) {
            this._aircrafts[l].refill(this._storeOfAmmo);
            this._storeOfAmmo -= ammoToLoad;
          }
        }
      }
    } else {
      console.log(`No more ammo!`);
    }
  }

  public getAllTheDamage(): number {
    let allTheDamage: number = 0;
    for (let i: number = 0; i < this._aircrafts.length; i++) {
      allTheDamage += this._aircrafts[i].getDamage();
    }
    return allTheDamage;
  }

  public allTheDamage(): number {
    let allTheDamage: number = 0;
    for (let i: number = 0; i < this._aircrafts.length; i++) {
      allTheDamage += this._aircrafts[i].fight();
    }
    return allTheDamage;
  }

  public fight(otherCarrier: Carrier): string {
    otherCarrier._health -= this.allTheDamage();
    if (otherCarrier._health <= 0) {
      return `It's dead Jim :(`;
    } else {
      return `${otherCarrier.getStatus()}`;
    }
  }

  public getStatus(): string {
    let out: string = ``;
    out += `HP: ${this._health}, Aircraft count: ${
      this._aircrafts.length
    }, Ammo Storage: ${
      this._storeOfAmmo
    }, Total damage: ${this.getAllTheDamage()}\r\n Aircrafts:`;
    for (let i: number = 0; i < this._aircrafts.length; i++) {
      out += `\r\n ${this._aircrafts[i].getStatus()}`;
    }
    return out;
  }
}
