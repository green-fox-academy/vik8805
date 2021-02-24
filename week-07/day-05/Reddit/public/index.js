'use strict';

function getPosts() {
  fetch('/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
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
    let posts = response.posts;
    posts.forEach((post) => {
      loadPostOnPage(post);
    })
  })
  .catch(error => {
    console.log(error.message);
  })
};

function voteOnPost(voteValue, postId) {
  let endpoint = '';
  if (voteValue === 'upvote') {
    endpoint = `/posts/${postId}/upvote`;
  } else if (voteValue === 'downvote') {
    endpoint = `/posts/${postId}/downvote`;
  };
  fetch(endpoint, {
    method: 'PUT',
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
  .then((response) => {
    refreshScore(response.score, response.id);
  })
  .catch(error => {
    console.log(error.message);
  })
};

function removePost(postId) {
  fetch(`/posts/${postId}`, {
    method: 'DELETE',
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
  .then((response) => {
    console.log(response);
  })
  .catch(error => {
    console.log(error.message);
  })
};

function refreshScore(newScore, id) {
  const scoreToChange = document.getElementById(`${id}`).firstChild.children[1];
  scoreToChange.innerHTML = newScore;
};

function loadPostOnPage(post) {
  const mainBlock = document.querySelector('main');
  const newPostBlock = document.createElement('div');
  const newVoteBlock = document.createElement('div');
  const newDescriptBlock = document.createElement('div');
  const newUpArrow = document.createElement('div');
  const newPostScore = document.createElement('p');
  const newDownArrow = document.createElement('div');
  const newPostTitle = document.createElement('h3');
  const newPostTimestamp = document.createElement('p');
  const newPostModifyLink = document.createElement('a');
  const newPostRemoveLink = document.createElement('a');
  newUpArrow.setAttribute('class', 'up Arrow');
  newVoteBlock.appendChild(newUpArrow);
  newPostScore.setAttribute('class', 'postScore');
  newPostScore.innerHTML = post.score;
  newVoteBlock.appendChild(newPostScore);
  newDownArrow.setAttribute('class', 'down Arrow');
  newVoteBlock.appendChild(newDownArrow);
  newPostTitle.setAttribute('class', 'postTitle')
  newPostTitle.innerHTML = post.title;
  newDescriptBlock.appendChild(newPostTitle)
  newPostTimestamp.setAttribute('class', 'postTimestamp')
  newPostTimestamp.innerHTML = humanized_time_span(post.timestamp);
  newDescriptBlock.appendChild(newPostTimestamp)
  newPostModifyLink.setAttribute('class', 'postModifyLink')
  newPostModifyLink.innerHTML = 'Modify';
  newDescriptBlock.appendChild(newPostModifyLink)
  newPostRemoveLink.setAttribute('class', 'postRemoveLink')
  newPostRemoveLink.innerHTML = 'Remove';
  newDescriptBlock.appendChild(newPostRemoveLink)
  newVoteBlock.setAttribute('class', 'voteBlock');
  newPostBlock.appendChild(newVoteBlock);
  newDescriptBlock.setAttribute('class', 'descriptBlock');
  newPostBlock.appendChild(newDescriptBlock);
  newPostBlock.setAttribute('id', `${post.id}`);
  newPostBlock.setAttribute('class', 'postBlock');
  mainBlock.appendChild(newPostBlock);
};
/*
  createPostElement('div', document.querySelector('main'), {id: `${post.id}`, class: 'postBlock'});
  createPostElement('div', document.querySelector('.postBlock'), {class: 'voteBlock'});
  createPostElement('div', document.querySelector('.postBlock'), {class: 'descriptBlock'});
  createPostElement('div', document.querySelector('.voteBlock'), {class: 'up Arrow'});
  createPostElement('p', document.querySelector('.voteBlock'), {class: 'postScore'}, post.score);
  createPostElement('div', document.querySelector('.voteBlock'), {class: 'down Arrow'});
  createPostElement('h3', document.querySelector('.descriptBlock'), {class: 'postTitle'}, post.title);
  createPostElement('p', document.querySelector('.descriptBlock'), {class: 'postTimestamp'}, humanized_time_span(post.timestamp));
  createPostElement('a', document.querySelector('.descriptBlock'), {class: 'postModifyLink'}, 'Modify');
  createPostElement('a', document.querySelector('.descriptBlock'), {class: 'postRemoveLink'}, 'Remove');
*/