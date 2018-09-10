var socket = io();
var globalMap;

socket.on('map', function(map){

	globalMap = map;

   	var row1 = "";
   	var row2 = "";
   	var row3 = "";
   	var row4 = "";
   	var row5 = "";
   			
   	// first row
   	for(var i = 0; i < map.buttons.length ; i++){ 
   	
   		if(i < 5) {
			if(!(map.buttons[i].hasBeenShot)){ 
				row1 = row1 + '<button name="' + map.buttons[i].id + '" class="btn btn-primary" onclick="updateMap(this.name)">'+ map.buttons[i].id +'</button>';
	 		} else if (map.buttons[i].hasBeenShot && map.buttons[i].isTarget ){
	 			row1 = row1 + '<button class="btn btn-danger">'+ map.buttons[i].id +'</button>';
	 		} else {
	 			row1 = row1 + '<button class="btn btn-dark">'+ map.buttons[i].id +'</button>';
	 		}
	 	} else if(i < 10){
	 		if(!(map.buttons[i].hasBeenShot)){ 
				row2 = row2 + '<button name="' + map.buttons[i].id + '" class="btn btn-primary" onclick="updateMap(this.name)">'+ map.buttons[i].id +'</button>';
	 		} else if (map.buttons[i].hasBeenShot && map.buttons[i].isTarget ){
	 			row2 = row2 + '<button class="btn btn-danger">'+ map.buttons[i].id +'</button>';
	 		} else {
	 			row2 = row2 + '<button class="btn btn-dark">'+ map.buttons[i].id +'</button>';
	 		}
	 	} else if(i < 15){
	 		if(!(map.buttons[i].hasBeenShot)){ 
				row3 = row3 + '<button name="' + map.buttons[i].id + '" class="btn btn-primary" onclick="updateMap(this.name)">'+ map.buttons[i].id +'</button>';
	 		} else if (map.buttons[i].hasBeenShot && map.buttons[i].isTarget ){
	 			row3 = row3 + '<button class="btn btn-danger">'+ map.buttons[i].id +'</button>';
	 		} else {
	 			row3 = row3 + '<button class="btn btn-dark">'+ map.buttons[i].id +'</button>';
	 		}
	 	} else if(i < 20){
	 		if(!(map.buttons[i].hasBeenShot)){ 
				row4 = row4 + '<button name="' + map.buttons[i].id + '" class="btn btn-primary" onclick="updateMap(this.name)">'+ map.buttons[i].id +'</button>';
	 		} else if (map.buttons[i].hasBeenShot && map.buttons[i].isTarget ){
	 			row4 = row4 + '<button class="btn btn-danger">'+ map.buttons[i].id +'</button>';
	 		} else {
	 			row4 = row4 + '<button class="btn btn-dark">'+ map.buttons[i].id +'</button>';
	 		}
	 	} else {
	 		if(!(map.buttons[i].hasBeenShot)){ 
				row5 = row5 + '<button name="' + map.buttons[i].id + '" class="btn btn-primary" onclick="updateMap(this.name)">'+ map.buttons[i].id +'</button>';
	 		} else if (map.buttons[i].hasBeenShot && map.buttons[i].isTarget ){
	 			row5 = row5 + '<button class="btn btn-danger">'+ map.buttons[i].id +'</button>';
	 		} else {
	 			row5 = row5 + '<button class="btn btn-dark">'+ map.buttons[i].id +'</button>';
	 		}
	 	}

	}
	
	document.getElementById("row1").innerHTML = row1;
	document.getElementById("row2").innerHTML = row2;
	document.getElementById("row3").innerHTML = row3;
	document.getElementById("row4").innerHTML = row4;
	document.getElementById("row5").innerHTML = row5;	    	 			
});

	 		 	
function updateMap(name){
	var buttonNumber = Number(name) - 1;
	globalMap.buttons[buttonNumber].hasBeenShot = true;
	console.log(globalMap);
	
	socket.emit('updateMap', globalMap);
	
}










	