'use strict';

// On the click of the button,
// Count the items in the list
// And display the result in the result element.

const button = document.querySelector('button');

button.addEventListener('click', () => {
  const ulElement = document.querySelector('ul');
  const answer = document.querySelector('.result');
  answer.innerHTML = `There are ${ulElement.children.length} item(s) in the list!`;
});