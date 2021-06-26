var name = "Adam Barnes";
var place = "Sydney";
var bio = "";

var dict = {

	//FILMS
	"f1": "Fantastic Mr. Fox (2009)",
	"f2": "La La Land (2016)",
	"f3": "The Grand Budapest Hotel (2014)",
	"f4": "Columbus (2017)",
	"f5": "500 Days of Summer (2009)",

	//BOOKS
	"b1": "<i>Dirt Music</i>Tim Winton",
	"b2": "<i>The Sun Also Rises</i>Ernest Hemingway",
	"b3": "<i>The English Patient</i>Michael Ondaatje",
	"b4": "<i>To the Islands</i>Randolph Stow",
	"b5": "<i>The Messenger</i>Markus Zusak",

	//ALBUMS
	"a1": "Memories & Dust (2007)<br>Josh Pyke",
	"a2": "For Emma, Forever Ago (2007)<br>Bon Iver",
	"a3": "Historian (2018)<br>Lucy Dacus",
	"a4": "Punisher (2020)<br>Phoebe Bridgers",

}

function itemContent(id, name) {
	document.getElementById(id + ".1").src = "images/items/" + id + ".jpg";
	document.getElementById(id + ".2").innerHTML = name;
}

document.querySelector(".dp").src = "images/dp.jpg";
	
document.getElementById("name").innerHTML = name;
document.getElementById("place").innerHTML = place;
document.getElementById("bio").innerHTML = bio;

for(var key in dict) {
	itemContent(key, dict[key]);
}