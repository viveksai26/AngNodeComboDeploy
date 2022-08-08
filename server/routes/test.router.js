var express = require('express');
var router = express.Router();
var path = require('path');
var employee = require('../utils/mongoose/mongooseScheme');
const { buildStatus, HTTPCodes, buildError } = require('../utils/helper');

const { connection } = require('../utils/helper');

router.get('/insertData', (req, res, next) => {
  var data = [
    {
      name: 'John',
      age: 21,
      location: 'New York'
    },
    {
      name: 'Smith',
      age: 27,
      location: 'Texas'
    },
    {
      name: 'Lisa',
      age: 23,
      location: 'Chicago'
    }
  ];
  employee.insertMany(data, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
