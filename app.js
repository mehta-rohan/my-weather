var express = require('express');
var yargs = require('yargs');
var logger = require('morgan');
var bodyParser = require('body-parser');
var weather = require('./router/weather'); 
var pushNotification = require('./router/pushNotification');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use('/weather',weather);
app.use('/push',pushNotification);
app.listen(3000,() => console.log("Server up"));
