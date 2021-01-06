'use strict';

/*
  If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
  If the first p has an 'apple' class, replace cat's content with 'dog'
  Make apple red by adding a .red class
  Make balloon less balloon-like (change its shape)
*/

const paragraphs = document.querySelectorAll('p');
const apple = document.querySelector('.apple');
const cat = document.querySelector('.cat');
const balloon = document.querySelector('.balloon');

if (paragraphs[3].classList.value === 'dolphin') {
  apple.innerText = 'pear';
};

if (paragraphs[0].classList.value === 'apple') {
  cat.innerText = 'dog';
};

apple.classList.add('red');

balloon.classList.remove('balloon');
balloon.classList.add('pear');