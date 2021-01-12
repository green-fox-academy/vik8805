'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/arrays', (req, res) => {
  let requestObj = req.body;
  let what = requestObj.what;
  let numbers = requestObj.numbers;
  if (what === undefined || numbers === undefined) {
    let errorMessage = {
      error: "Please provide what to do with the numbers!"
    };
    res.json(errorMessage);
  } else {
    let resultNumber = 0;
    if (what === 'sum') {
      numbers.forEach((element) => {
        resultNumber += element;
      });
    };
    if (what === 'multiply') {
      resultNumber = 1;
      numbers.forEach((element) => {
        resultNumber *= element;
      });
    };
    if (what === 'double') {
      resultNumber = [];
      numbers.forEach((element) => {
        resultNumber.push(element * 2);
      });
    };
    let responseResult = {
      result: resultNumber
    };
    res.json(responseResult);
  };
});

app.listen(3000);