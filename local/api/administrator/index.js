"use strict";

const path    = require('path');
const fs      = require('fs');
const express = require('express');
const _filter = require('lodash-es/filter');
const csrf    = require('csurf');

const Administrator = require('models/Administrator');
const {
  checkEmail,
  checkPass,
  checkPassTwo,
  checkNames,
  checkAdminAuth,
  } = require('lib/middleware');

const router = express.Router();

// Add as middleware
const csrfProtection = csrf()
// Use template engine to pass token
// res.render('send', { csrfToken: req.csrfToken() })
// <input type="hidden" name="_csrf" value="{{csrfToken}}">

// Must be authorized for all API calls
router.all('/administrator', checkAdminAuth, function(req, res, next) {
  next();
});

// Get all administrator
router.get('/administrator', function(req, res) {
  const administrator = new Administrator();

    administrator.all()
    .then( regTenants => {
      const admins = _filter(regTenants, {type: 'admin'} );

      if (admins.length)
        return res.type('application/json').send(JSON.stringify(admins, null, 2));
    }).catch( error => {
      // LOG/HANDLE ERROR
      console.log(error);
      return res.status(500).send(error);
    });
});

// Get an administrator by email
router.get('/administrator/:email', function(req, res) {
  const administrator = new Administrator();
  console.log('email: ', req.params.email);
  // TODO
  return res.status(500).send('Something went wrong!');
});

// Create an administrator
router.post('/administrator', checkNames, checkEmail, checkPass, checkPassTwo, function(req, res, next) {
  const administrator = new Administrator();
  const user          = new User();

  const email       = req.body.email;
  const firstName   = req.body.firstName;
  const middleName  = req.body.middleName;
  const lastName    = req.body.lastName;
  const password    = req.body.password;
  const passwordTwo = req.body.passwordTwo;

  if (isEmpty(email, password, passwordTwo, firstName, lastName))
    return res.status(500).send('Something went wrong!');

  if (!password)
    return res.status(500).send('Something went wrong!');

  if (!passwordTwo)
    return res.status(500).send('Something went wrong!');

  if (password !== passwordTwo)
    return res.status(500).send('Something went wrong!');

  user.hash(password).then(function(success) {
    if (!success)
      return res.status(500).send('Something went wrong!');

    user.setVal('email', email);
    user.setVal('type', 'admin');
    user.setVal('timestamp', Math.floor(Date.now() / 1000).toString());

    administrator.setVal('email', email);
    administrator.setVal('firstName', firstName);
    administrator.setVal('middleName', middleName);
    administrator.setVal('lastName', lastName);
    administrator.setVal('timestamp', Math.floor(Date.now() / 1000).toString());

    user.create(function(error, user) {
      if (error !== null)
        return res.status(500).send(error);

      administrator.create(function(error, admin) {
        if (error !== null)
          return res.status(500).send(error);

       return res.status(200).send('Success');
      });
    });
  }).catch(function(error) {
    console.log(error);
    return res.status(500).send(error);
  });
});

// Update an administrator by email
router.put('/administrator/:email', function(req, res, next) {
  const administrator = new Administrator();
  console.log('email: ', req.params.email);
  // TODO
  return res.status(500).send('Something went wrong!');
});

// Delete an administrator by email
router.delete('/administrator/:email', checkEmail, function(req, res, next) {
  const administrator = new Administrator();

  const email = req.params.email;

  if (email === '')
    return res.status(500).send('Something went wrong!');

  administrator.delete({
    'email': email,
    'type' : 'admin'
  }, function(error, numOfDeletes) {
    if (error !== null)
      return res.status(500).send(error);

    if (!numOfDeletes)
      return res.status(500).send('Something went wrong!');

    return res.status(200).send('Success');
  });
});

module.exports = router;