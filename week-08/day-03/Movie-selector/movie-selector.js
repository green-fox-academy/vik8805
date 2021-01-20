'use strict';

const genreSelector = document.querySelector('#genre');
const movieSelector = document.querySelector('#movie');
const movieSelectorList = document.querySelector('#movie').children;
const selectedMovie = document.querySelector('#selectedMovie');

genreSelector.addEventListener('change', (event) => {
  let genreOptions = event.target;
  Object.keys(genreOptions).forEach(genreKey => {
    if (genreOptions[genreKey].selected) {
      Object.keys(movieSelectorList).forEach(movieKey => {
        if (genreOptions[genreKey].className === 'none') {
          movieSelectorList[movieKey].removeAttribute('hidden');
        } else if (movieSelectorList[movieKey].getAttribute('class') === genreOptions[genreKey].className) {
          movieSelectorList[movieKey].removeAttribute('hidden');
        } else {
          movieSelectorList[movieKey].setAttribute('hidden', 'hidden');
        };
      });
    };
  });
});

movieSelector.addEventListener('change', (event) => {
  let movieOptions = event.target;
  Object.keys(movieOptions).forEach(movieKey => {
    if (movieOptions[movieKey].selected) {
      selectedMovie.innerHTML = movieOptions[movieKey].innerHTML;
    };
  });
});