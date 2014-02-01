'use strict';

var injector =  require('../module.js');

injector.mock = function(service, mock){
  injector._providers[service][1] = mock;
};

module.exports = injector;
