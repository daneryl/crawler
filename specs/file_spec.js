'use strict';

var injector = require('./module.js');
var fs = require('fs');

describe('download test', function () {

  var _file;

  beforeEach(function(){
    injector.invoke(function(file) {
      _file = file;
    });
  });

  describe('file().save()', function(){
    it('should create a file with content passed', function(done){
      var destination = __dirname + '/test_downloads/test_file.txt';
      _file(destination).save('test content')
      .then(function() {
        fs.readFile(destination, 'utf8', function(err, data) {
          expect(data).toBe('test content');
          done();
        });
      })
      .catch(done);
    });
  });

  describe('file().remove()', function(){
    it('should create a file with content passed', function(done){
      var destination = __dirname + '/test_downloads/test_file.txt';
      _file(destination).save('test content')
      .then(function(file) {
        return file.remove();
      })
      .then(function() {
        fs.exists(destination, function(file_exists) {
          expect(file_exists).toBe(false);
          done();
        });
      })
      .catch(done);
    });
  });
});
