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
  let query = `SELECT * FROM posts${seFilterById(req.query['id'])};`;
  conn.query(query, (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    };
    let response;
    if (rows.length > 1) {
      response = {
        posts: rows,
      };
    } else {
      response = rows[0];
    };
    res.status(200).json(response);
  });
});

app.post('/posts', (req, res) => {
  let query = 'INSERT INTO posts (title, url) VALUES (?, ?);';
  conn.query(query, [req.body.title, req.body.url],  (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    };
    let addedPostId = rows['insertId'];
    res.redirect(`/posts?id=${addedPostId}`);
  });
});

function seFilterById(id) {
  let filter = '';
  if (id !== undefined) {
    filter = ` WHERE id = ${id}`;
  };
  return filter;
};

app.listen(3000);