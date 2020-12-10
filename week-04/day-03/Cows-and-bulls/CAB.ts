'use strict';

export class CAB {
  protected _numberToGuess: number[];
  protected _gameState: string;
  protected _guessesCounter: number;
  constructor(fourDigitNumberToGuess?: number[]) {
    this._numberToGuess = fourDigitNumberToGuess || [];
    if (this._numberToGuess === []) {
      for (let i: number = 0; i < 4; i++) {
        this._numberToGuess[i] = Math.floor(Math.random() * 10);
      }
    }
    this._gameState = 'playing';
    this._guessesCounter = 0;
  }
  public get numberToGuess(): number[] {
    return this._numberToGuess;
  }

  public guess(listOfFourNumbers: number[]): string {
    let bullCounter: number = 0;
    let cowCounter: number = 0;
    for (let i: number = 0; i < listOfFourNumbers.length; i++) {
      for (let j: number = 0; j < this._numberToGuess.length; j++) {
        if (listOfFourNumbers[i] === this._numberToGuess[i]) {
          bullCounter += 1;
          j = this._numberToGuess.length;
        } else if (listOfFourNumbers[i] === this._numberToGuess[j]) {
          cowCounter += 1;
        }
      }
    }
    this._guessesCounter++;
    if (bullCounter === 4) {
      this._gameState = 'finished';
    }
    if (!cowCounter && !bullCounter) {
      return 'wrong guess';
    } else if (!bullCounter) {
      return `${cowCounter} cow`;
    } else if (cowCounter && bullCounter) {
      return `${cowCounter} cow, ${bullCounter} bull`;
    } else if (!cowCounter) {
      if (bullCounter === 4) {
        this._gameState = 'finished';
        return `${bullCounter} bull! Cogratulation, you win!`;
      } else {
        return `${bullCounter} bull`;
      }
    }
  }
}
