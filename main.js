/*
David Magee
VFW 0512
*/

window.addEventListener("DOMContentLoaded", function(){
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	};
	
	//Adds options for planets
	function listPlanets (){
		var formTag = document.getElementsByTagName("form"), //This is an array
			selectLi = $('derp'),
			makeHomePlanet = document.createElement('select');
			makeHomePlanet.setAttribute("id", "homeplanets");
		for(i=0, j=homePlanets.length; i<j; i++){
			var createOption = document.createElement('option');
			var optText = homePlanets[i]; 
			createOption.setAttribute("value", optText);
			createOption.innerHTML = optText;
			makeHomePlanet.appendChild(createOption);
		}
		selectLi.appendChild(makeHomePlanet);
	};
	
	//Adds options for skills
	
	
	//Planets Array
	var homePlanets = ["Allied Planets", "Mars", "Earth", "Pluto", "Vegas", 
	"Relkin Group", "Turos", "Heisinkr", "Velarius"];
	
	//calls to functions
	listPlanets();
	
	//Button Presses	
	var displayLink = $('displaydata');
	displayLink.addEventListener("click", getData);
	var clearLink = $('cleardata');
	clearLink.addEventListener("click", clearData);
	var saveLink =  $('savedata');
	saveLink.addEventListener("click", saveData);


	//calls to functions
	listPlanets();
















});

/* 
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	};
*/
