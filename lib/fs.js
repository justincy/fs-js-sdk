var request = require('superagent');
var FS = {};
var undefined;

function Client(devKey, reference, baseUrl) {
  
  // Save the devkey
  this.devKey = devKey;
  
  // Calculate the base url
  if( baseUrl !== undefined ) {
    this.baseUrl = baseUrl;
  } else if( reference == 'production' ) {
    this.baseUrl = 'https://familysearch.org';
  } else {
    this.baseUrl = 'https://sandbox.familysearch.org';
  }
  
};

FS.Client = Client;

Client.prototype.setAccessToken = function(accessToken) {
  this.accessToken = accessToken;
};

Client.prototype.getDiscovery = function(callback) {
  var self = this;
  if( self.discovery === undefined ) {
    request
      .get(self.baseUrl + '/.well-known/app-meta')
      .set('Accept', 'application/json')
      .end(function(response){
        self.discovery = response.body;
        callback(self.discovery);
      });
  } else {
    callback(self.discovery);
  }
};

module.exports = FS;