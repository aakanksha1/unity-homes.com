"use strict";
const MongoClient = require('mongodb').MongoClient
const assert      = require('assert');
const {sanitize} = require('../resources/js/sanitize')

const db   = 'mongodb://127.0.0.1:27017/unity';

let findUser = function (email, callback) {
  let safeEmail = sanitize(email, function(error, email) {
    if(error) // TODO Log error
      return false;
    return email;
  });
  if (!safeEmail)
    return callback(new Error('Unsafe Input'));
  MongoClient.connect(db, function(err, db) {
    if(err)
      return callback(new Error('Could not connect to DB'));
    const collection = db.collection('registeredUsers');
    collection.find({'email': safeEmail}).toArray(function(err, user) {
      if(err)
        return callback(new Error('Could not find ' + safeEmail));
      db.close();
      return callback(null, user[0]);
    });
  });
};

let findNewUser = function (code, callback) {
  let safeCode = sanitize(code, function(error, code) {
    if(error)
      return false;
    return code;
  });

  if (!safeCode)
    return callback(new Error('Unsafe Input!'));

  MongoClient.connect(db, function(err, db) {
    if(err)
      return callback(new Error('Could not connect to DB'));
    const collection = db.collection('unregisteredUsers');
    collection.find({'code': safeCode}).toArray(function(err, user) {
      if(err)
        return callback(new Error('Could not find ' + safeEmail));
      db.close();
      return callback(null, user[0]);
    });
  });
};

module.exports = {
  findUser: findUser,
  findNewUser: findNewUser
}
