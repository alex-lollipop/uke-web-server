let express = require('express');
let ejs = require('ejs');
let path = require('path');

let testData = require('./test-data');

let testRouter = async (req, res) => {
  res.json({
    err: null,
    data: testData
  });
}

module.exports = testRouter;
