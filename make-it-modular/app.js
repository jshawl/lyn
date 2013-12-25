var mymodule = require('./module.js');
mymodule('../filtered-ls', 'css', function(err, data){
  if(err){
    console.log('err: ' + err);
  }
 console.log(data); 
});
