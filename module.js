var crawler_module = {
  'download': ['factory', require('./src/download')],
  'http': ['value', require('http')],
  'Q': ['value', require('q')]
};

var di = require('di');
var injector = new di.Injector([crawler_module]);

module.exports = injector;
