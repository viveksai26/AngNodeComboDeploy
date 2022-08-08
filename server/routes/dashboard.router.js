var express = require('express');
var router = express.Router();
var path = require('path');

const { buildStatus, HTTPCodes, buildError } = require('../utils/helper');

const { connection } = require('../utils/helper');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'flowers' });
});

module.exports = router;
