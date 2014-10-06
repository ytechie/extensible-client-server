var express = require('express');
var fs = require('fs');

var app = express();
var bus = {};
var extensionFile;
var extension;

//var sample = require('./extensions/sample-extension.js');

//load extensions
fs.readdirSync("./extensions").forEach(function(file) {
	extensionFile = "./extensions/" + file;
	extension = require(extensionFile);

	console.log('Found extension ' + extensionFile);

  	extension.init(app, bus);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});