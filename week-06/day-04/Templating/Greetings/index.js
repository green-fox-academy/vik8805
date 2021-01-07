'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  if (req.query.name === undefined) {
    res.render('home', {
      name: 'Guest'
    });
  } else {
    res.render('home', {
      name: req.query.name
    });
  }
});

app.listen(3000);