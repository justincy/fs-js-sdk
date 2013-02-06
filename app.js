var fs = require('./lib/fs.js');
fs = new fs('');

fs.getDiscovery(function(response1){
  fs.getDiscovery(function(response2){
    console.log( response1 == response2 );
  });
});