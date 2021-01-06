'use strict';

/*1)  Append every paragraph with the last one's content.
  2)  Do the same again, but you should keep the cat strong.*/

const paragraphs = document.querySelectorAll('p');
const lastParagraph = document.querySelector('.animals')
paragraphs.forEach((value) => {
  value.innerHTML += ` ${lastParagraph.innerHTML}`;
});