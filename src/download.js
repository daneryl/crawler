'use strict';

module.exports = function(http, Q, path, fs, directory){

  return function(resource, destination){
    var deferred = Q.defer();

    directory.exists(destination)
    .then(function(exists) {
      if(!exists){
        return directory.create(destination);
      }
      return;
    })
    .then(function() {
      http.get(resource, function(response) {
        var file_name = path.basename(resource);
        var file = fs.createWriteStream(destination+file_name);
        var copy = response.pipe(file);
        copy.on('close', function() {
          deferred.resolve();
        });
      });
    }).catch(console.log);

    return deferred.promise;
  };
};
