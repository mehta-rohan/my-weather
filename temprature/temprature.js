var request = require('request');
var key = require('../config/config');

var getTemprature = function(latitude,longitude,callback){
	request({
		url:key.weatherAPI+key.weatherAPIKey+latitude+","+longitude,
		json: true
	},(error,response,body) =>{
		if(error){
			callback('Unable to reach weater server');
		}else if(body.error !== undefined){
			callback(body.error);
		}else{
			callback(undefined,{
				currentTemprature: body.currently.temperature
			});
		}
	}
	);
};

module.exports = {
	getTemprature
}