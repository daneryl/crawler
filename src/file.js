'use strict';

module.exports = function(Q, fs) {

  return function(path) {

    return {
      path: path,

      save: function(content) {
        var deferred = Q.defer();
        var _this = this;

        fs.writeFile(path, content, function(error) {
          if(error){
            deferred.reject(error);
          }
          deferred.resolve(_this);
        });

        return deferred.promise;
      },

      remove: function() {
        var deferred = Q.defer();
        var _this = this;

        fs.unlink(path, function(error) {
          if(error){
            deferred.reject(error);
          }
          deferred.resolve(_this);
        });

        return deferred.promise;
      }
    };
  };

};
