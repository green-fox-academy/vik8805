'use strict';

export class Aircraft {
  protected _type: string;
  protected _maxAmmo: number;
  protected _ammo: number;
  protected _baseDamage: number;
  protected _isPriority: boolean;
  constructor() {
    this._ammo = 0;
  }

  public get maxAmmo(): number {
    return this._maxAmmo;
  }

  public get ammo(): number {
    return this._ammo;
  }

  public getDamage(): number {
    let damage: number = this._ammo * this._baseDamage;
    return damage;
  }

  public fight(): number {
    let damage: number = this._ammo * this._baseDamage;
    this._ammo = 0;
    return damage;
  }

  public refill(amountOfAmmoToRefillWith: number): number {
    let remainingAmmo: number = 0;
    if (this._maxAmmo - this._ammo <= amountOfAmmoToRefillWith) {
      remainingAmmo = amountOfAmmoToRefillWith - (this._maxAmmo - this._ammo);
      this._ammo = amountOfAmmoToRefillWith - remainingAmmo;
    } else {
      this._ammo += amountOfAmmoToRefillWith;
    }
    return remainingAmmo;
  }

  public get type(): string {
    return this._type;
  }

  public getStatus(): string {
    return `Type ${this._type}, Ammo: ${this._ammo}, Base Damage: ${
      this._baseDamage
    }, All Damage ${this._ammo * this._baseDamage}`;
  }

  public get isPriority(): boolean {
    return this._isPriority;
  }
}
