'use strict';

var injector = require('./module.js');
var nock = require('nock');

describe('download test', function () {

  var download_service;
  injector.invoke(function(download) {
    download_service = download;
  });

  beforeEach(function () {
    nock('http://www.omfgnotexist.com')
    .get('/')
    .reply(404, 'test');
  });

  it('should resolve the promise with response value', function(done){

    download_service('http://www.omfgnotexist.com')
    .then(function(statusCode) {
      expect(statusCode).toBe(404);
      done();
    })
    .catch(done);

  });

});
