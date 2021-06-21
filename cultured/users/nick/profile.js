var name = "Nick Browne";
var place = "Sydney";

var dict = {

	//FILMS
	"f1": "Beau Travail (1999)",
	"f2": "8½ (1963)",
	"f3": "Parasite (2019)",
	"f4": "The White Ribbon (2009)",
	"f5": "Apocalypse Now (1979)",

	//BOOKS
	"b1": "<i>The Metamorphosis</i>Franz Kafka",
	"b2": "<i>The Trial</i>Franz Kafka",
	"b3": "<i>The Goldfinch</i>Donna Tartt",
	"b4": "<i>If on a winter's night a traveller</i>Italo Calvino",
	"b5": "<i>The Sense of an Ending</i>Julian Barnes",

	//ALBUMS
	"a1": "Woodface (1991)<br>Crowded House",
	"a2": "Greatest Hits (1981)<br>Queen",
	"a3": "The Greatest Hits (2014)<br>Australian Crawl",
	"a4": "The Eddy (2020)<br>The Eddy",

}

function itemContent(id, name) {
	document.getElementById(id + ".1").src = "images/items/" + id + ".jpg";
	document.getElementById(id + ".2").innerHTML = name;
}

document.querySelector(".dp").src = "images/dp.jpg";
	
document.getElementById("name").innerHTML = name;
document.getElementById("place").innerHTML = place;

for(var key in dict) {
	itemContent(key, dict[key]);
}