/*
David Magee
VFW 0512
*/

window.addEventListener("DOMContentLoaded", function(){
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	};
	
	var homePlanets = [ "Home Planet", "Mars", "Earth", "Pluto", "Vegas", "Turos", 
		"Heisinkr", "Velarius"];
		
	var displayLink = $('displaydata');
	displayLink.addEventListener("click", getData);
	var clearLink = $('cleardata');
	clearLink.addEventListener("click", clearData);
	var saveLink = $('savedata');
	saveLink.addEventListener("click", saveData);

















});

/* 
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	};
*/
