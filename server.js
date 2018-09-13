// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var gameMap = require('./mapGenerator.js');
var Gpio = require('onoff').Gpio;
var app = express();
var server = http.Server(app);
var io = socketIO(server);
var ship1 = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var ship2 = new Gpio(17, 'out');
var ship3 = new Gpio(27, 'out');
var ship4 = new Gpio(22, 'out');
var ship5 = new Gpio(5, 'out');
var map = gameMap.generateJsonMap();
var numShipsShot = 0;

// Set all the ships to low output
// In this example we put 1 for low and 0 for high
ship1.writeSync(1);
ship2.writeSync(1);
ship3.writeSync(1);
ship4.writeSync(1);
ship5.writeSync(1);

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
		blastFireWork(determineShipsHit(map));
		io.sockets.emit('map', map);
	});
});


function determineShipsHit(newMap){ 
 var counter = 0;
 for( var i = 0; i < newMap.buttons.length; i++){
 	if(newMap.buttons[i].hasBeenShot == true && newMap.buttons[i].isTarget == true){
 	  counter++;
 	} 
 }
 return counter;
}

function blastFireWork(counter){

  if(counter > numShipsShot){
	switch (counter) {
		case 0:
		break;
		
		case 1:
		numShipsShot = 1;
		// Replace with pin1 high
		break;
		
		case 2:
		numShipsShot = 2;
		//replace with pin2 high
		break;
		
		case 3:
		numShipsShot = 3;
		//replace with pin3 high
		break;
		
		case 4:
		numShipsShot = 4;
		//replace with pin4 high
		break;
		
		case 5:
		numShipsShot = 5;
		//replace with pin5 high
		break;
	
	}
  }
  
}

// Starts the server.
server.listen(5000, function() {
  console.log('Starting server on port 5000');
  
});




















