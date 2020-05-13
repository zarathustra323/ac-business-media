const express = require('express');
const noCache = require('nocache');
const retrieve = require('./retrieve');
const pkg = require('../../package.json');

const app = express();

app.use(noCache());

app.get('/', (req, res) => {
  res.json({ [pkg.name]: pkg.version });
});

app.use('/retrieve', retrieve());

module.exports = app;
