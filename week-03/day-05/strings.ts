'use strict';

// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' chars have been changed to 'y' chars.

function changeLowerXToY(text: string) {
  if (text.search('x') === -1) {
    return text;
  } else {
    return (text = text.replace('x', 'y')), changeLowerXToY(text);
  }
}

console.log(
  changeLowerXToY(
    'there are a lot of lowercase xxx and there are some uppercase XXXX and now there are some lowercase and uppercase mixed xxxXXxxXXXXxxx'
  )
);
