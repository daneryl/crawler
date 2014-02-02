var crawler_module = {
  'download': ['factory', require('./src/download.js')],
  'directory': ['factory', require('./src/directory.js')],
  
  'http': ['value', require('http')],
  'Q': ['value', require('q')],
  'fs': ['value', require('fs')],
  'path': ['value', require('path')]
};

var di = require('di');
var injector = new di.Injector([crawler_module]);

module.exports = injector;
