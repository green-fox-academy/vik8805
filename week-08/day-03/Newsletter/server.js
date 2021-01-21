'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/public/newsletter.html');
});

app.post('/signup', (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  res.write(`<h1>Thanks ${username}, we will send updates to ${email}</h1>`);
});

app.listen(3000);