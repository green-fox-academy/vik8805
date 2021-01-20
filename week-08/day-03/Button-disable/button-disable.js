'use strict';

const form = document.querySelector('form');
const radioNo = document.querySelector('#no');
const radioGoldfish = document.querySelector('#goldfish')
const signUpButton = document.querySelector('#signUp');
const iLoveCatsButton = document.querySelector('#iLoveCats');

form.addEventListener('change', (event) => {
  const radioId = event.target.id;
  if (radioId === 'dog' || radioId === 'cat' || radioId === 'goldfish' && radioNo.checked) {
    signUpButton.removeAttribute('disabled');
  } else if (radioId === 'goldfish') {
    signUpButton.setAttribute('disabled', 'disabled');
  };
  if (radioId === 'yes') {
    iLoveCatsButton.removeAttribute('disabled');
  };
  if (radioId === 'no' && radioGoldfish.checked) {
    iLoveCatsButton.setAttribute('disabled', 'disabled');
    signUpButton.removeAttribute('disabled');
  };
});

form.addEventListener('click', (event) => {
  const buttonId = event.target.id;
  if (buttonId === 'signUp' && radioGoldfish.checked && radioNo.checked) {
    alert(`Sigh, we still added you to the cat facts list`);
  } else if (buttonId === 'iLoveCats' || buttonId === 'signUp') {
    alert(`Thank you, you've successfully signed up for cat facts`);
  };
});