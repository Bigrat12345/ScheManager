var path            = require('path');
var mime            = require('mime');
var express         = require('express');
var app             = express();
var server          = require('http').Server(app);

//Depend on our routes
require('./routes.js')(app);

//Listen
var port = 8080;
server.listen(port);
console.log('Server listening on port ' + port);