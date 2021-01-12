'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

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

app.get('/appenda/:appendable', (req, res) => {
  let appendable = req.params.appendable;
  let respond = {
    appended: appendable + 'a'
  };
  res.json(respond);
});

app.get('/appenda', (req, res) => {
  res.sendStatus(404);
});

app.get('/dountil/:action', (req, res) => {
  let errorMessage = {
    error: "Please provide a number!"
  };
  res.json(errorMessage);
});

app.post('/dountil/:action', (req, res) => {
  let reqUntil = req.body;
  if (reqUntil.until === undefined) {
    let errorMessage = {
      error: "Please provide a number!"
    };
    res.json(errorMessage);
  } else {
    let reqAction = req.params.action;
    let untilNumber = Number(reqUntil.until);
    let resultNumber = 0;
    if (reqAction === 'sum') {
      for (let i = 0; i < untilNumber + 1; i++) {
        resultNumber += i;
      };  
    };
    if (reqAction === 'factor') {
      resultNumber = 1;
      for (let j = untilNumber; j > 1; j--) {
        resultNumber *= j;
      };
    };
    let responseResult = {
      result: resultNumber
    };
    res.json(responseResult);
  }
});

app.listen(3000);