'use strict';

export function letterOccurance(text: string): object {
  let listOfLetters = {};
  for (let i: number = 0; i < text.length; i++) {
    if (listOfLetters.hasOwnProperty(text.toLowerCase().charAt(i))) {
      listOfLetters[text.toLowerCase().charAt(i)] += 1;
    } else {
      listOfLetters[text.toLowerCase().charAt(i)] = 1;
    }
  }
  for (let key in listOfLetters) {
    let letters: string = 'abcdefghijklmnopqrstuvwxyz';
    let checker: boolean = false;
    for (let j: number = 0; j < letters.length; j++) {
      if (key === letters.substr(j, 1)) {
        checker = true;
      }
    }
    if (!checker) {
      delete listOfLetters[key];
    }
  }
  return listOfLetters;
}
