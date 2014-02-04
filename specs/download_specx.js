'use strict';

var injector = require('./module.js');
var nock = require('nock');
var fs = require('fs');

describe('download test', function () {

  var download_service;
  injector.invoke(function(download) {
    download_service = download;
  });

  beforeEach(function () {
    nock('http://www.omfgnotexist.com')
    .get('/test_file.txt')
    .reply(404, 'test');
  });

  it('should resolve the promise with response value', function(done){

    var resource = 'http://www.omfgnotexist.com/test_file.txt';
    var destination = __dirname + '/test_downloads/';

    download_service(resource, destination)
    .then(function() {
      fs.readFile(__dirname + '/test_downloads/test_file.txt', 'utf8', function(err, data) {
        expect(data).toBe('test');
        done();
      });
    }).catch(done);

  });

});
