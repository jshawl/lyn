var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var filter = process.argv[3];


fs.readdir(dir, function(err, list){
  for(i=0;i<list.length;i++){
    file = list[i];
    if (path.extname(file) == '.'+filter){
      console.log(file)
    }
  }
});
