"use strict";
const express = require('express');
const moment  = require('moment');

const router = express.Router();

router.get('/tenant', function(req, res) {
  let time; // TODO Log time and req
  const NOW = new Date().getTime();

  res.render('tenant', {
    time: moment(NOW).format('LLL')
  });
  
});

module.exports = router;
