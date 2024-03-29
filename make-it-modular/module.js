module.exports = function(dir, filter, callback){
  var fs = require('fs');
  var path = require('path');
  var dir = process.argv[2];
  var filter = process.argv[3];
  fs.readdir(dir, function(err, list){
    if(err){
      return callback(err);
    }
    list.forEach(function(file){
      if (path.extname(file) == '.'+filter){
	callback(null, file);
      }
    });
  });
}
