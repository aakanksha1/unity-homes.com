"use strict"

const app = angular.module('ngAdmin', []);

app.service('getRequest', ['$http', function($http) {
  return function(url) {
    return $http({
      method: 'GET',
      url,
    });
  } 
}]);

app.service('postRequest', ['$http', function($http) {
  return function(url, data) {
    return $http({
      method: 'POST',
      url,
      data,
    });
  } 
}]);

app.service('putRequest', ['$http', function($http) {
  return function(url, data) {
    return $http({
      method: 'PUT',
      url,
      data,
    });
  } 
}]);

app.service('deleteRequest', ['$http', function($http) {
  return function(url) {
    return $http({
      method: 'DELETE',
      url,
    });
  } 
}]);

// applicant
app.service('getAllApplicants', ['getRequest', function(getAllRequest) {
  return () => getRequest(`/api/applicant`);
}]);
app.service('getApplicant', ['getRequest', function(getRequest) {
  return email => getRequest(`/api/applicant/${email}`);
}]);
app.service('createApplicant', ['postRequest', function(postRequest) {
  return data => postRequest(`/api/applicant`, data);
}]);
// TODO
app.service('updateApplicant', ['postRequest', function(putRequest) {
  return data => putRequest(`/api/applicant/${data}`);
}]);
app.service('deleteApplicant', ['postRequest', function(deleteRequest) {
  return email => deleteRequest(`/api/applicant/${email}`);
}]);

// tenant
app.service('getAllTenants', ['getRequest', function(getAllRequest) {
  return () => getRequest(`/api/tenant`);
}]);
app.service('getTenant', ['getRequest', function(getRequest) {
  return email => getRequest(`/api/tenant/${email}`);
}]);
app.service('createTenant', ['postRequest', function(postRequest) {
  return data => postRequest(`/api/tenant`, data);
}]);
// TODO
app.service('updateTenant', ['postRequest', function(putRequest) {
  return data => putRequest(`/api/tenant`, data);
}]);
app.service('deleteTenant', ['postRequest', function(deleteRequest) {
  return email => deleteRequest(`/api/applicant/${email}`);
}]);

// property
app.service('getAllProperties', ['getRequest', function(getAllRequest) {
  return () => getRequest(`/api/property`);
}]);
app.service('getProperty', ['getRequest', function(getRequest) {
  return id => getRequest(`/api/property/${id}`);
}]);
app.service('createProperty', ['postRequest', function(postRequest) {
  return data => postRequest(`/api/property`, data);
}]);
// TODO
app.service('updateProperty', ['postRequest', function(putRequest) {
  return data => putRequest(`/api/property`, data);
}]);
app.service('deleteProperty', ['postRequest', function(deleteRequest) {
  return id => deleteRequest(`/api/property/${id}`);
}]);

// administrator
app.service('getAllAdmins', ['getRequest', function(getAllRequest) {
  return () => getRequest(`/api/administrator`);
}]);
app.service('getAdmin', ['getRequest', function(getRequest) {
  return email => getRequest(`/api/administrator/${email}`);
}]);
app.service('createAdmin', ['postRequest', function(postRequest) {
  return data => postRequest(`/api/administrator`, data);
}]);
// TODO
app.service('updateAdmin', ['postRequest', function(putRequest) {
  return data => putRequest(`/api/administrator`, data);
}]);
app.service('deleteAdmin', ['postRequest', function(deleteRequest) {
  return email => deleteRequest(`/api/administrator/${email}`);
}]);

// GETS ALL DATA
app.service('initialize', ['$q', 'getRequest', function($q, getRequest) {
  const promises = [
    getRequest(`/api/applicant`),
    getRequest(`/api/tenant`),
    getRequest(`/api/administrator`),
    getRequest(`/api/property`)
  ];

  return () => $q.all(promises);
}]);

app.controller('dashboardCtrl', ['$scope', 'initialize', function($scope, initialize) {
  initialize().then( data => {
    $scope.applicants = data[0].data;
    $scope.tenants = data[1].data;
    $scope.administrators = data[2].data;
    $scope.properties = data[3].data;
  })
  .catch( error => {
    console.log('Error: ' + error);
  });
}]);
