"use strict";

const express = require('express');

const Tenant                    = require('models/Tenant');
const User                      = require('models/User');
const Administrator             = require('models/Administrator');
const { checkEmail, checkPass } = require('lib/middleware');
const { isEmpty }               = require('lib/functions');

const router = express.Router();

router.get('/login', function(req, res) {
  return res.render('login');
});
  
router.post('/login', checkEmail, checkPass, function(req, res, next) {
  const tenant         = new Tenant();
  const user           = new User();
  const administrator  = new Administrator();

  const email    = req.body.email;
  const password = req.body.password;
  const year     = 365 * 24 * 60 * 60 * 1000;
  
  if (req.body.remember)
    res.cookie('remember', email, { maxAge: year });

  if (isEmpty(email, password))
    return res.render('login', { invalid: true });

  user.authenticate(email, password, function(error, user) {
    if (error !== null)
      return res.render('login', {
        invalid: true
      });

    req.session.type      = user.type;
    req.session.userAuth  = true;

    if (user.type === 'admin') {
      administrator.find({ email })
        .then((admin) => {
          req.session.firstName = admin.firstName;
          req.session.lastName  = admin.lastName;

          return res.redirect('/dashboard');
        })
        .catch( error => {
          // LOG/HANDLE ERROR
          console.log(error);
          return res.status(500).send(error);
        });
    }

    if (user.type === 'tenant') {
      tenant.find({ email })
        .then((tenant) => {
          req.session.firstName = tenant.firstName;
          req.session.lastName  = tenant.lastName;

          return res.redirect('/dashboard/tenant');
        })
        .catch( error => {
          // LOG/HANDLE ERROR
          console.log(error);
          return res.status(500).send(error);
        });
    }
  });
});

/*
res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
*/
// TODO CSRF

// handle csrf errors specifically
//router.use(function(err, req, res, next) {
//    if (err.code !== 'EBADCSRFTOKEN') return next(err);
//    res.status(403).send("ERROR: session has expired or been tampered with");
//});

module.exports = router;

