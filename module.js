var crawler_module = {
  'file': ['factory', require('./src/file.js')],
  
  'http': ['value', require('http')],
  'Q': ['value', require('q')],
  'fs': ['value', require('fs')],
  'path': ['value', require('path')],
  'simplecrawler': ['value', require('simplecrawler')]
};

var di = require('di');
var injector = new di.Injector([crawler_module]);

module.exports = injector;
