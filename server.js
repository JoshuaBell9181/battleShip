// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io')(http);
var gameMap = require('./mapGenerator.js');
var app = express();
var server = http.Server(app);
var io = socketIO(server);

var map = gameMap.generateJsonMap();

app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));


app.get('/', function(request, response){
	response.render('gameBoard.ejs');
});

//Add the WebSocket handlers
io.on('connection', function(socket) {
	io.sockets.emit('map', map);
	socket.on('updateMap', function(globalMap){
		map = globalMap;
		io.sockets.emit('map', map);
	});
});

// Starts the server.
server.listen(5000, function() {
  console.log('Starting server on port 5000');
  
});




















