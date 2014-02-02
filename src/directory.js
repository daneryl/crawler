'use strict';

module.exports = function(Q, fs) {
  return {

    exists: function(path) {
      var deferred = Q.defer();

      fs.exists(path, function(exists) {
        deferred.resolve(exists);
      });

      return deferred.promise;
    },

    create: function(path) {
      var deferred = Q.defer();

      fs.mkdir(path, function() {
        deferred.resolve();
      });

      return deferred.promise;
    }

  };
};
