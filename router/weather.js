var express = require('express');
var router = express.Router();
var geoLocation = require('../geo/geoLocation');
var temprature = require('../temprature/temprature');

var showWeather = function(address,response,latLang) {
	 
	geoLocation.getGeoLocation(address,(errorMessage,result)=>{
		if(errorMessage){
			response.send(errorMessage);
		}else{
			temprature.getTemprature(result.latitude,result.longitude,(errorMessage,weather)=>{
				if(errorMessage){
					response.send(errorMessage);
				}else{
					var tempF = parseFloat(weather.currentTemprature);
					var tempC = parseInt((5.0/9.0)*(tempF-32.0));
					response.send("Address : "+result.address +"<br>" +"Temprature (celcius) : "+tempC);
				}
			});
		}
	});
}


router.get('/',(request,response,next)=> {
	showWeather(request.query.address,response);
});

router.post('/',(request,response,next)=> {
	showWeather(request.body.address,response);
});

router.get('/about',(request,response,next)=> {
	//showWeather(request.body.address,response);
	response.send("200");
});

module.exports = router; 