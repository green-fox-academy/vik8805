'use strict';

window.onload = () => {
  getPosts();
};

const mainBlock = document.querySelector('main');

mainBlock.addEventListener('click', (event) => {
  const clickedElementsClassName = event.target.getAttribute('class');
  let clickedElementsPostId = event.target.parentElement.getAttribute('id');
  if (clickedElementsClassName.search('Arrow') !== -1) {
    if (clickedElementsClassName.search('up') !== -1) {
      voteOnPost('upvote', clickedElementsPostId);
    } else if (clickedElementsClassName.search('down') !== -1) {
      voteOnPost('downvote', clickedElementsPostId);
    };
  };
});