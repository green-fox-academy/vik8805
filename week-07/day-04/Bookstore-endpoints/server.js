'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1988',
  database: 'bookstore'
});

conn.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql');
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/titles', (req, res) => {
  let query = 'SELECT book_name FROM book_mast;';
  let titles = [];
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err.toString());
      res.status(500).json({'error': 'database error'});
      return;
    };
    rows.forEach(element => {
      Object.keys(element).forEach(key => {
        titles.push(element[key]);
      });
    });
    res.render('titles', {
      titles: titles
    });
  });
});

app.get('/books', (req, res) => {
  let filters = req.query;
  let where = '';
  if (filters) {
    where = ' WHERE';
    Object.keys(filters).forEach((key, index) => {
      if (typeof filters[key] === 'string') {
        where += addCondition(key, index, Object.keys(filters).length - 1, filters[key]);
      } else {
        let values = '';
        filters[key].forEach((value, index) => {
          if (index === filters[key].length - 1) {
            values += `"${value}"`;
          } else {
            values += `"${value}", `;
          };
        });
        where += addCondition(where, key, index, Object.keys(filters).length - 1, values);
      };
    });
  };
  let query = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
               FROM bookstore.book_mast 
               JOIN author ON author.aut_id = book_mast.aut_id 
               JOIN category ON category.cate_id = book_mast.cate_id 
               JOIN publisher ON publisher.pub_id = book_mast.pub_id${where};`;
  let book = [];
  let table = [];
  console.log(query);
  conn.query(query, (err, rows) => {
    rows.forEach(element => {
      Object.keys(element).forEach(key => {
        book.push(element[key]);
      });
      table.push(book);
      book = [];
    });
    if (err) {
      console.log(err.toString());
      res.status(500).json({'error': 'database error'});
      return;
    };
    res.render('books', {
      books: table
    });
  });
});

function addCondition(key, keyIndex, numberOfKeys, value) {
  let whereCondition = '';
  if (key === 'category' || key === 'publisher') {
    key = 'cate_descrip';
    if (key === 'publisher') {
      key = 'pub_name';
    };
    if (keyIndex === numberOfKeys) {
      whereCondition += ` ${key}` + ' IN ' + `("${value}")`;
    } else {
      whereCondition += ` ${key}` + ' IN ' + `("${value}") AND`;
    };
  };
  if (key === 'plt') {
    key = 'book_price';
    if (keyIndex === numberOfKeys) {
      whereCondition += ` ${key}` + ' < ' + `("${value}")`;
    } else {
      whereCondition += ` ${key}` + ' < ' + `("${value}") AND`;
    };
  };
  if (key === 'pgt') {
    key = 'book_price';
    if (keyIndex === numberOfKeys) {
      whereCondition += ` ${key}` + ' > ' + `("${value}")`;
    } else {
      whereCondition += ` ${key}` + ' > ' + `("${value}") AND`;
    };
  };
  return whereCondition;
};

app.listen(3000);