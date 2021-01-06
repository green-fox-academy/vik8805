'use strict';

/*
  1) replace the list items' content with items from this list:
  ['apple', 'banana', 'cat', 'dog']
  2) change the <ul> element's background color to 'limegreen'
    - use css class to change the color instead of the style property
*/

const items = ['apple', 'banana', 'cat', 'dog'];
const listItems = document.querySelectorAll('li');
const unorderedList = document.querySelector('ul');

listItems.forEach((value, index) => {
  value.innerHTML = items[index];
});

unorderedList.setAttribute('class', 'limegreen');