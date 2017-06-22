//initialize 
var express = require('express');
var yargs = require('yargs');
var logger = require('morgan');
var bodyParser = require('body-parser');
var weather = require('./router/weather'); 
var pushNotification = require('./router/pushNotification');
var app = express();
var port = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use('/weather',weather);
app.use('/push',pushNotification);


//server start
app.listen(port,() => console.log(`Server listening @ ${port}`));
