'use strict';

module.exports = function(Q, fs) {

  return function(path) {

    return {
      save: function(content) {
        var deferred = Q.defer();
        var _this = this;

        fs.writeFile(path, content, function() {
          deferred.resolve(_this);
        });

        return deferred.promise;
      },

      remove: function() {
        var deferred = Q.defer();
        var _this = this;

        fs.unlink(path, function() {
          deferred.resolve(_this);
        });

        return deferred.promise;
      }
    };
  };

};
