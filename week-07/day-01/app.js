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
    res.status(200).json(errorMessage);
  } else {
    let result = received * 2;
    let doublingResponse = {
      received: Number(received), 
      result: result,
    };
    res.json(doublingResponse);
  };
});

app.listen(3000);