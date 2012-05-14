/*
David Magee
VFW 0512
Project 3
*/

window.addEventListener("DOMContentLoaded", function(){
	
	//This is the getelementbyid function.  use the $ symbol to run the function
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
	
	function listSkills (){
		var formTag = document.getElementsByTagName("form"), //This is an array
			selectLi = $('allskills'),
			makeSkills = document.createElement('select');
			makeSkills.setAttribute("id", "theskills");
		for(i=0, j=skillOptions.length; i<j; i++){
			var createOption = document.createElement('option');
			var optText = skillOptions[i]; 
			createOption.setAttribute("value", optText);
			createOption.innerHTML = optText;
			makeSkills.appendChild(createOption);
		}
		selectLi.appendChild(makeSkills);
	};
	

//listed below are the variables and calls for above functions
	//Planets Array
	var homePlanets = ["~~Allied Planets~~", "Mars", "Earth", "Pluto", "Vegas", 
	"~~Relkin Group~~", "Turos", "Heisinkr", "Velarius"];
	
	//calls to functions
	listPlanets();
	
	//Skills Array
	var skillOptions = ["~~Fighting Skills~~", "Swordsman", "Smasher", "Boxer", 
	"~~Shooting Skills~~", "Gunner", "Sniper", "Tank", "~~Thieving Skills~~", "Thief", 
	"Charmer", "Assassin", "~~Sorcery Skills~~", "Mage", "Wizard", "Shaman", 
	"~~Techster Skills~~", "Hacker", "Biotic", "Anarchist" ];
	
	//call to listskills function
	listSkills();	
	

	
	// find value of the gender button
	function getGender(){
		var selected = document.forms[0].gender;
		for(var i=0; i<selected.length; i++){
			if(selected[i].checked){
				genderValue = selected[i].value;
			}
		}
	};
	
	/* This is an example of if a check boxed was checked.  Note the if and else.
	function getGenderValue(){
		if($('checkboxIdHere').checked){
			valueInStoredObject = $('checkBoxIdHere').value;
		}else{
			valueInStoredObject = "No"
		};
	}
	
	be sure to call the value outside of the scope of the function so it can be reused
	with a default value.  Default values are your friend.
	*/ 
	
	//Had to return the value as a variable to be used outside function
	var genderValue;
	
	function toggleControls(n){
			switch(n){
				case "on":
					$('profileForm').style.display = "none"; //NEED PROPER TAG
					$('cleardata').style.display = "inline"; //NEED PROPER TAG
					$('displaydata').style.display = "none";
					$('newdata').style.display = "inline";
					break; 
				case "off":
					$('profileForm').style.display = "block";
					$('cleardata').style.display = "inline"; 
					$('displaydata').style.display = "inline";
					$('newdata').style.display = "none";
					$('info').style.display = "none";
					break;
				default:
					return false;
			}
	}
	
	
	function saveData(){
		var id 					= Math.floor(Math.random()*10000001);
		//this retrieves and gathers our form values and store in object.
		//Object properties contain array with the form label and input values.
		
		var item				= {};
		getGender();
		item.planet				= ["Home Planets: ", $('homeplanets').value];
		item.skill				= ["Skill: ", $('theskills').value];
		item.name				= ["Name: ", $('name').value];
		item.born				= ["Born: ", $('born').value];
		item.morality			= ["Morality: ", $('morality').value];
		item.character			= ["Character: ", $('character').value];
		item.bio				= ["Bio: ", $('bio').value];
		item.gender				= ["Gender: ", genderValue ];
		//Save data into local storage: use Stringify to convert our object to a string.
		localStorage.setItem(id, JSON.stringify(item));
		alert("Profile Saved!");
	}
	
	
	
	
	//Get data function. Writes the data saved to the browser. 
	function getData(){
		toggleControls('on');
		if(localStorage.length === 0){
			alert("Nothing is stored in local storage.")
		};
		var createDiv = document.createElement('div');
		createDiv.setAttribute("id", "info");
		var makeList = document.createElement('ul');
		createDiv.appendChild(makeList);
		document.body.appendChild(createDiv);
		$('info').style.display = "display";
		for(i=0, j=localStorage.length; i<j; i++){
			var makeli = document.createElement('li');
			var linksLi = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var object = JSON.parse(value); //This converts string data back to object
			var sublist = document.createElement('ul');
			makeli.appendChild(sublist);
			for(var n in object){
				var listItems = document.createElement('li');
				sublist.appendChild(listItems);
				var subText = object[n][0] +" "+object[n][1];
				listItems.innerHTML = subText;
				sublist.appendChild(linksLi);
			}
			createItemLinks(); //This creates the buttons for each item in the storage.
		}
	};
	
	function clearData(){
		if(localStorage.length === 0){
			alert("You haven't entered anything, mate.")
		} else {
			localStorage.clear();
			alert("All profiles have been deleted.");
			window.location.reload();
			return false;
		}
	}
	
	//Button Presses	
	var displayLink = $('displaydata');
	displayLink.addEventListener("click", getData);
	var clearLink = $('cleardata');
	clearLink.addEventListener("click", clearData);
	var saveLink =  $('savedata');
	saveLink.addEventListener("click", saveData);

});

