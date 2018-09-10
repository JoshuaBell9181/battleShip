var buttonOptions = []; 

module.exports = {

generateJsonMap : function generateMap(){
	fillButtonOptions();
	var JsonMap = buildInitialJson();
	for(var i = 0; i < buttonOptions.length; i++){
		JsonMap.buttons[buttonOptions[i] - 1].isTarget = true;
	}
	
	return JsonMap;
	}

};


function buildInitialJson(){
	var JsonString = ' { "buttons": [ { "id": 1 , "hasBeenShot": false, "isTarget": false},';
	for(var i = 2; i < 25; i++){
		JsonString = JsonString + '{ "id": ' + i +  ', "hasBeenShot": false, "isTarget": false},';
	}
	JsonString = JsonString +  '{ "id": 25, "hasBeenShot": false, "isTarget": false}]}';
	
	return JSON.parse(JsonString);
}

function fillButtonOptions(){
		
	var numberToCheck = getRndInteger(1,25);
	
	if ( buttonOptions.length === 5){
		return;
	} else if(! numberIsDuplicate(numberToCheck) ){
		buttonOptions.push(numberToCheck);
		fillButtonOptions();
	} else {
		fillButtonOptions();
	}
			
}

function numberIsDuplicate(numberToCheck){
	for(var i = 0; i < buttonOptions.length; i++){
		if(buttonOptions[i] === numberToCheck){
			return true;
		}
	}
return false;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}