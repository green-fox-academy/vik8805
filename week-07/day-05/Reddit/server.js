'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1988',
  database: 'redditdb',
  insecureAuth: 'true',
});

conn.connect((err) => {
  if(err) {
    console.log(err.toString());
  }
  console.log('Connected to mysql');
});

app.use(express.json());
app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.get('/posts', (req, res) => {
  let query = `SELECT * FROM posts${setFilterById(req.query['id'])};`;
  conn.query(query, (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    };
    res.status(200).json(setResponse(rows));
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

app.put('/posts/:id/:vote', (req, res) => {
  let scoreModifier = 1;
  if (req.params.vote === 'downvote') {
    scoreModifier = -1;
  };
  let query = `UPDATE posts SET score = score + ${scoreModifier} WHERE id = ?;`;
  conn.query(query, [req.params.id], (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    };
    let updatedPostId = req.params.id;
    res.redirect(`/posts?id=${updatedPostId}`);
  });
});

app.delete('/posts/:id', (req, res) => {
  let deletedPostId = req.params.id;
  let query = `SELECT * FROM posts${setFilterById(deletedPostId)};`;
  conn.query(query, (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    };
    let response = setResponse(rows);
    query = 'DELETE FROM posts WHERE id = ?;';
    conn.query(query, [req.params.id], (err, rows) => {
      if (err) {
        res.status(500).json(err);
        return;
      };
      res.status(200).json(response);
    });
  });
});

app.put('/posts/:id', (req, res) => {
  let query = 'UPDATE posts SET title = ?, url = ? WHERE id = ?;';
  conn.query(query, [req.body.title, req.body.url, req.params.id], (err, rows) => {
    if (err) {
      res.status(500).json(err);
      return;
    };
    let updatedPostId = req.params.id;
    res.redirect(`/posts?id=${updatedPostId}`);
  });
});

function setFilterById(id) {
  let filter = '';
  if (id !== undefined) {
    filter = ` WHERE id = ${id}`;
  };
  return filter;
};

function setResponse(rows) {
  let response;
  if (rows.length > 1) {
    response = {
      posts: rows,
    };
  } else {
    response = rows[0];
  };
  return response;
};

app.listen(3000);