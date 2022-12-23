var shelljs = require('shelljs');
var express = require('express');
var app = express();

app.use (express.static ('public'));

app.get ('/', function (req, res) {
	console.log ('client connected')
	res.sendFile (__dirname + "/HW5_callShellWithServer.html");
});





var server = app.listen (3000, function() {
	console.log ('server started on port 3000');
});

	



