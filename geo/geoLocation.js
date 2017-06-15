var request = require('request');
var key = require('../config/config');
var getGeoLocation = function(address,callback){
	request({
		url:key.googleAPI+address,
		json: true
	},(error,response,body) =>{
		if(error){
			callback('Unable to reach google server');
		}else if(body.status === "ZERO_RESULTS"){
			callback('Unable to fetch the address');
		}else if(body.status === "OK"){
			callback(undefined,{
				address:body.results[0].formatted_address,
				latitude:body.results[0].geometry.location.lat,
				longitude:body.results[0].geometry.location.lng
			});
		}
	}
	);
};

module.exports = {
	getGeoLocation
}

/*{
  "name": "myweather",
  "version": "0.0.0",
  "private": true,
  "dependencies": {
    "express": "^4.15.3",
    "request": "^2.81.0",
    "yargs": "^8.0.1",
    "body-parser": "~1.17.1",
  //  "cookie-parser": "~1.4.3",
  //  "debug": "~2.6.3",
  //  "jade": "~1.11.0",
  //  "morgan": "~1.8.1",
    "serve-favicon": "~2.4.2"
  }
}*/
