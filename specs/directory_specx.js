'use strict';

var injector = require('./module.js');
var fs = require('fs');

describe('directory test', function () {

  var directory_service;
  injector.invoke(function(directory) {
    directory_service = directory;
  });

  beforeEach(function () {
  });

  describe('exists', function(){
    it('should return false on unexistant directory', function(done){
      directory_service.exists(__dirname + '/unexistant_dir/')
      .then(function(exists) {
        expect(exists).toBe(false);
        done();
      });
    });

    it('should return true if directory exists', function(done){
      directory_service.exists(__dirname + '/test_dir/')
      .then(function(exists) {
        expect(exists).toBe(true);
        done();
      });
    });
  });

  describe('create', function(){
    afterEach(function(done){
      fs.exists(__dirname + '/new_dir/', function(exists) {
        if(exists){
          return fs.rmdir(__dirname + '/new_dir/', function() {
            done();
          });
        }
        done();
      });
    });
    it('should create a directory', function(done){
      directory_service.create(__dirname + '/new_dir/')
      .then(function() {
        fs.exists(__dirname + '/new_dir/', function(exists) {
          expect(exists).toBe(true);
          done();
        });
      });
    });
  });

});
