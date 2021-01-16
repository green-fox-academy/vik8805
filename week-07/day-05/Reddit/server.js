'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1988',
  database: 'reddit',
  insecureAuth: 'true',
});

conn.connect((err) => {
  if(err) {
    console.log(err.toString());
  }
  console.log('Connected to mysql');
});

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts', (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    };
    res.status(200).json(rows);
  });
});

app.listen(3000);