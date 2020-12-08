'use strict';
import { Reservationy } from './reservationy';

export class Reservation implements Reservationy {
  protected _code: string;
  protected _day: string;
  constructor() {
    this._code = this.getCodeBooking();
    this._day = this.getDowBooking();
  }
  public getDowBooking(): string {
    let dow: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SAN'];
    return dow[Math.floor(Math.random() * 7)];
  }
  public getCodeBooking(): string {
    let randomCode: string = '';
    let charSet: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i: number = 0; i < 8; i++) {
      randomCode += `${charSet.charAt(Math.floor(Math.random() * charSet.length))}`;
    }
    return randomCode;
  }
  public print(): string {
    return `Booking# ${this._code} for ${this._day}`;
  }
}
