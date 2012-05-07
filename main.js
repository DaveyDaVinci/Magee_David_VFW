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
			selectLi = $('planets'),
			makeHomePlanet = document.createElement('select');
			makeHomePlanet.setAttribute("id", "homeplanets");
		for (i=0, j=homePlanets.length; i<j; i++){
			var createOption = document.createElement('option');
			var optText = homePlanets[i]; 
			createOption.setAttribute("value", optText);
			createOption.innerHTML = optText;
			makeHomePlanet.appendChild(createOption);
		}
		selectLi.appendChild(makeHomePlanet);
	};
	
	
	//Planets Array
	var homePlanets = ["Allied Planets", "Mars", "Earth", "Pluto", "Vegas", 
	"Relkin Group", "Turos", "Heisinkr", "Velarius"];
	
	//calls to functions
	listPlanets();
	
	
	//Adds options for skills
	
	function listSkills (){
		var formTag = document.getElementsByTagName("form"), //This is an array
			selectLi = $('allskills'),
			makeSkills = document.createElement('select');
			makeSkills.setAttribute("id", "theskills");
		for (i=0, j=skillOptions.length; i<j; i++){
			var createOption = document.createElement('option');
			var optText = skillOptions[i]; 
			createOption.setAttribute("value", optText);
			createOption.innerHTML = optText;
			makeSkills.appendChild(createOption);
		}
		selectLi.appendChild(makeSkills);
	};
	
	//Skills Array
	var skillOptions = ["Fighting Skills", "Swordsman", "Smasher", "Boxer", 
	"Shooting Skills", "Gunner", "Sniper", "Tank", "Thieving Skills", "Thief", 
	"Charmer", "Assassin", "Sorcery Skills", "Mage", "Wizard", "Shaman", 
	"Techster Skills", "Hacker", "Biotic", "Anarchist" ];
	
	//call to listskills function
	listSkills();
	

	
	
	
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
