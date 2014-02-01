'use strict';

var injector = require('./module.js');

describe('download test', function () {

  injector.mock('http', {'royer': 'lol'});

  var download_service;
  injector.invoke(function(download) {
    download_service = download;
  });


  beforeEach(function () {
  });

  it('should be true', function(){
    expect(true).toBe(true);
  });

});
