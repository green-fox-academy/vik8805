'use strict';

const express = require('express');
const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.listen(3000);