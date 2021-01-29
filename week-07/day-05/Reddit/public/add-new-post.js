'use strict';

function addNewPost(inputDatas) {
  fetch('/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputDatas),
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
    let postsDatas = response;
    console.log(postsDatas);
  })
  .catch(error => {
    console.log(error.message);
  })
};

const form = document.querySelector('form');

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  let title = form.title.value;
  let url = form.url.value;
  if (title === '' || url === '') {
    console.log('Missing title or url!');
    return;
  } else {
    let postDatas = {
      title: title,
      url: url,
    };
    addNewPost(postDatas);
    window.location.href = "./index.html";
  };
});