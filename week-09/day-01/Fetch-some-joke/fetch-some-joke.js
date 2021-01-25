'use strict';

const button = document.querySelector('button');

function getSomeJoke() {
  fetch('http://api.icndb.com/jokes/random', {
    method: 'GET',
  })
  .then(response => {
    if(response.status != 200) {
      throw new Error('Something bad happend!')
    }
    return response;
  })
  .then(response => 
    response.json()
  )
  .then(response => {
    writeOutResponse(response.value.joke)
  })
  .catch(error => {
    writeOutResponse(error.message)
  })
};

button.addEventListener('click', (event) => {
  getSomeJoke();
});

function writeOutResponse(response) {
  const div = document.querySelector('div');
  const newParagraph = document.createElement('p');
  newParagraph.innerHTML = response;
  div.appendChild(newParagraph);
};