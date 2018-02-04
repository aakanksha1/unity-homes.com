"use strict";

const express = require('express');

const { checkTenantAuth } = require('lib/middleware');

const router = express.Router();

router.get('/dashboard/tenant', checkTenantAuth, function(req, res) {
  const now = new Date().getTime();
  // TODO Log time and req
  const fullName = req.session.firstName + ' ' + req.session.lastName;

  return res.render('tenant', {
    fullName
  });
});

module.exports = router;