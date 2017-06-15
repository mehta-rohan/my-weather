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


