const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/build/app`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'app', 'index.html'));
});

module.exports = app;
