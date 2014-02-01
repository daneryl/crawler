var crawler_module = {
  'download': ['factory', require('./src/download')],
  'http': ['value', require('http')]
};

var di = require('di');
var injector = new di.Injector([crawler_module]);

injector.invoke(function() {
});

module.exports = injector;
