'use strict';

/* You can work in the html or in a separate js file. Like:
  1. store the element that says 'The King' in the 'king' variable.
  console.log it.
  2. store 'The Businessman' and 'The Lamplighter'
  in the 'businessLamp' variable.
  console.log each of them.
  3. store 'The King' and 'The Conceited Man'
  in the 'conceitedKing' variable.
  alert them one by one.
  4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
  in the 'noBusiness' variable.
  console.log each of them.*/

  const king = document.querySelector('#b325');
  console.log(king);
  
  const businessLamp = document.querySelectorAll('.big');
  businessLamp.forEach((value) => {
    console.log(value);
  });

  const conceitedKing = document.querySelectorAll('#b325, .b326');
  conceitedKing.forEach((value) => {
    alert(value);
  });

  const noBusiness = document.querySelectorAll('div.asteroid');
  noBusiness.forEach((value) => {
    console.log(value);
  });

