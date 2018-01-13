"use strict";

const {_create}   = require('../../mongodb/create');
const {_delete}   = require('../../mongodb/delete');
const {_count}    = require('../../mongodb/read');
const {_find}     = require('../../mongodb/read');
const {_all}      = require('../../mongodb/read');
const {safeEmail} = require('../../resources/js/safe');
const {safeNum}   = require('../../resources/js/safe');
const {safeBool}  = require('../../resources/js/safe');
const {safeYear}  = require('../../resources/js/safe');
const {safeStr}   = require('../../resources/js/safe');
const {safePass}  = require('../../resources/js/safe');
const {newErr}    = require('../../resources/js/error');
const {customErr} = require('../../resources/js/error');

const Application = function() {
  this.id = {
    value   : '',
    required: false
  }
  this.email = {
    value   : '',
    required: true,
    safe    : function(email) {
      return safeEmail(email);
    }
  }
  this.phone = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.firstName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.middleName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.lastName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.dob = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.ssn = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.propertyId = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.street = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.city = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.state = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.zip = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.timeLived = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.landlordFName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.landlordLName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.landlordPhone = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.previousStreet = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.previousCity = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.previousState = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.previousZip = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.previousTimeLived = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.previousLandlordFirstName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.previousLandlordLName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.previousLandlordPhone = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.monthlyIncome = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.employer = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.employerPhone = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeNum(num);
    }
  }
  this.employerStreet = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.employerCity = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.employerState = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.employerZip = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }        
  }
  this.position = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.timeWorked = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.supervisorFName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.supervisorLName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.previousEmployer = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.previousEmployerPhone = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.previousEmployerStreet = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.previousEmployerCity = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.previousEmployerState = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.previousEmployerZip = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }        
  }
  this.previousPosition = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }
  }
  this.previousTimeWorked = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.previousSupervisorFName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.previousSupervisorLName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.firstRoommateFName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.firstRoommateLName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.firstRelationship = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.secondRoommateFName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.secondRoommateLName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.secondRelationship = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.thirdRoommateFName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.thirdRoommateLName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.thirdRelationship = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.fourthRoommateFName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.fourthRoommateLName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.fourthRelationship = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.firstPetName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.firstPetGender = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.firstPetBreed = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.firstPetWeight = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }        
  }
  this.firstPetAge = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }        
  }
  this.firstPetSpayed = {
    value   : '',
    required: false,
    safe    : function(bool) {
      return safeBool(bool);
    }        
  }
  this.secondPetName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.secondPetGender = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.secondPetBreed = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.secondPetWeight = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }        
  }
  this.secondPetAge = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }        
  }
  this.secondPetSpayed = {
    value   : '',
    required: false,
    safe    : function(bool) {
      return safeBool(bool);
    }        
  }
  this.firstReferenceFName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.firstReferenceLName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.firstReferenceRel = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.firstReferenceYears = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }        
  }
  this.firstReferencePhone = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }        
  }
  this.secondReferenceFName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.secondReferenceLName = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.secondReferenceRel = {
    value   : '',
    required: false,
    safe    : function(str) {
      return safeStr(str);
    }        
  }
  this.secondReferenceYears = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }        
  }
  this.secondReferencePhone = {
    value   : '',
    required: false,
    safe    : function(num) {
      return safeNum(num);
    }        
  }
  this.timestamp = {
    value   : '',
    required: true,
    safe    : function(num) {
      return safeNum(num);
    }
  }
  this.setVal = function(key, val) {
    let safeValue;

    if (typeof key !== 'string')
      return false;

    if (typeof val !== 'string')
      return false;

    safeValue = this[key].safe(val);

    if (safeValue.safe) {
      this[key].value = safeValue.val;
      
      return true;
    }

    return false;
  }
  this.getObject = function() {
    let object = {}
    let keys   = [];

    Object.keys(this).forEach(function(val, i, arr) {
      if (typeof this[val] !== 'function')
        keys.push(val);
    }.bind(this));

    for (let i = 0; i < keys.length - 1; i++) {
      object[keys[i]] = this[keys[i]].value;
    }

    return object;
  }
  this.getFullObject = function() {
    let object = {};
    let keys   = [];

    Object.keys(this).forEach(function(val, i, arr) {
      if (typeof this[val] !== 'function')
        keys.push(val);
    }.bind(this));

    for (let i = 0; i < keys.length; i++) {
      object[keys[i]] = {
        value:    this[keys[i]].value,
        required: this[keys[i]].required
      };
    }

    return object;
  }
  this.reset = function() {
    let keys   = [];

    Object.keys(this).forEach(function(val, i, arr) {
      if (typeof this[val] !== 'function')
        keys.push(val);
    }.bind(this));

    for (let i = 0; i < keys.length - 1; i++) {
      this[keys[i]].value = '';
    }

    return;
  }
  this.create = function(callback) {
    const fullObj = this.getFullObject();
    const dataObj = this.getObject();

    const keys = Object.keys(fullObj);

    for(let x = 0; x < keys.length; x++) {
      if (fullObj[keys[x]].required === true){
        if (fullObj[keys[x]].value === '') {
          this.reset();
          return callback(customErr('Missing Required Value'))
        }
      }
    }

    _count('applications', {
      'email': this.email.value
    }, function(error, count) {

      if (error !== null)
        return callback(newErr(error));

      if (!count) {
        _create('applications', dataObj, function(error, app) {
          if (error !== null)
            return callback(newErr(error));

          return callback(null, app)
        });
      }else{
        // TODO: Ask user if they want to continue
        // current application
        return callback(customErr('Duplicate Email'));
      }
    });
  }
  this.delete = function(filter, callback) {
    _delete('applications', filter, function(error, numOfDeletes) {
      if (error !== null)
        return callback(newErr(error));

      return callback(null, numOfDeletes)
    });
  }
  this.all = async function() {
    const apps = await _all('applications').then(function(apps) {
      return apps;
    }, function(error) {
      return callback(newErr(error));
    });
      
    return apps;
  }
  this.find = function(filter, callback) {
    if (filter === undefined)
      filter = this.getObject();

    _find('applications', filter, function(error, app, numFound) {
      if (error !== null)
        return callback(newErr(error));

      return callback(null, app, numFound);
    });
  }
  this.fill = function(request, callback) {
    const dataObj = this.getObject();

    Object.keys(request.body).forEach( function(key) {
      if (dataObj.hasOwnProperty(key))
        this.setVal(key, request.body[key]);
    }.bind(this));

    this.setVal('timestamp', Math.floor(Date.now() / 1000).toString());

    const filledObj = this.getObject();

    const fullObj = this.getFullObject();

    const keys = Object.keys(fullObj);

    for(let x = 0; x < keys.length; x++) {
      if (fullObj[keys[x]].required === true){
        if (fullObj[keys[x]].value === '') {
          this.reset();
          return callback(customErr('Missing Required Value'))
        }
      }
    }

    return callback(null, filledObj);
  }
}

module.exports = Application;
