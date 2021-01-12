'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let received = req.query.input;
  if (received === undefined) {
    let errorMessage = {
      error: "Please provide an input!"
    };
    res.json(errorMessage);
  } else {
    let result = received * 2;
    let doublingResponse = {
      received: Number(received), 
      result: result,
    };
    res.json(doublingResponse);
  };
});

app.get('/greeter', (req, res) => {
  if (req.query.name === undefined || req.query.title === undefined) {
    let errorMessage = {};
    if (req.query.name === undefined && req.query.title === undefined) {
      errorMessage = {
        error: "Please provide a name and a title!"
      };
    } else if (req.query.name === undefined) {
      errorMessage = {
        error: "Please provide a name!"
      };
    } else {
      errorMessage = {
        error: "Please provide a title!"
      };
    };  
    res.status(400).json(errorMessage);
  } else {
    let name = req.query.name;
    let title =  req.query.title;
    let greeting = {
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`
    };
    res.json(greeting);
  };
});

app.listen(3000);