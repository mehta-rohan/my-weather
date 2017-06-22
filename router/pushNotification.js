var express = require('express');
var router = express.Router();
var admin = require('firebase-admin');
var key = require('../config/config');

var serviceAccount = require('../config/reminder-65597-firebase-adminsdk-awhxg-d689d7eca8.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://reminder-65597.firebaseio.com"
});


var payload = {
  data: {
    score: "850",
    time: "2:45"
  }
};

router.get('/',(req,res,next)=>{
	//console.log(admin);

	admin.messaging().sendToDevice(registrationToken, payload)
		  .then(function(response) {
		    // See the MessagingDevicesResponse reference documentation for
		    // the contents of response.
		    console.log("Successfully sent message:", response);
		  })
		  .catch(function(error) {
		    console.log("Error sending message:", error);
		  });
});

module.exports = router;