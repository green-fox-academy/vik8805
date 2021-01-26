const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  let message = req.query.message;
  if (!Object.keys(req.query).length) {
    res.status(400).json({'error': 'I am Groot!'});
      return;
  };
  res.status(200).json({ 'received': `${message}`, 'translated': 'I am Groot!', });
});

module.exports = app;