'use strict';

// Given a string, compute recursively a new string where all the adjacent chars are now separated by a *

function separateChars(text: string, counterStartingZero: number) {
  if (counterStartingZero === text.length - 1) {
    return text;
  } else {
    return (
      (text = `${text.slice(0, counterStartingZero + 1)}*${text.slice(
        counterStartingZero + 1
      )}`),
      separateChars(text, counterStartingZero + 2)
    );
  }
}

console.log(
  separateChars(
    'there are a lot of lowercase xxx and there are some uppercase XXXX',
    0
  )
);
