'use strict';

const body = document.querySelector('body');

setBodyStyle();
createMainBlock();
onload = () => {
  getArticle();
};

function setBodyStyle() {
  body.style.padding = '10px';
  body.style.margin = '0';
  body.style.backgroundColor = 'grey';
  body.style.display = 'flex';
  body.style.flexDirection = 'column';
  body.style.justifyContent = 'center';
};

function createMainBlock() {
  const newMain = document.createElement('div');
  newMain.classList.add('main');
  newMain.style.padding = '0';
  newMain.style.margin = '0';
  newMain.style.height = '100%';
  newMain.style.width = '100%';
  newMain.style.alignSelf = 'center';
  body.appendChild(newMain);
};

function getArticle() {
  const xhr = new XMLHttpRequest();
  const main = document.querySelector('.main');
  xhr.open('GET', `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=LGAZhtzxC3yoSfg5Da8d7JMkTNutaqGd`);
  xhr.onload = () => {
    const response = JSON.parse(xhr.response);
    for (let i = 0; i < response.response.docs.length; i++) {
      const newUl = document.createElement('ul');
      newUl.style.backgroundColor = 'white';
      newUl.style.border = 'solid';
      main.appendChild(newUl);
      const allUl = document.querySelectorAll('ul');
      for (let j = 0; j < 4; j++) {
        const newLi = document.createElement('li');
        allUl[i].appendChild(newLi);
        if (j === 3) {
          const newLink = document.createElement('a');
          newLink.innerHTML = 'Source';
          allUl[i].lastChild.appendChild(newLink);
          newLink.setAttribute('href', `${response.response.docs[i].web_url}`)
        }
      };
      const allLi = allUl[i].children;
      allLi[0].innerText = response.response.docs[i].headline.main;
      allLi[1].innerText = response.response.docs[i].snippet;
      allLi[2].innerText = response.response.docs[i].pub_date;

    };
  };
  xhr.send();
};