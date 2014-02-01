'use strict';

module.exports = function(http, Q){

  return function(resource){
    var deferred = Q.defer();
    
    http.get(resource, function(response) {
      deferred.resolve(response.statusCode);
    });

    return deferred.promise;
  };
};
