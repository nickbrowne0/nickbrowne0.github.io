var name = "Mark Buddee";
var place = "Sydney";

var dict = {

	//FILMS
	"f1": "Pulp Fiction (1994)",
	"f2": "Mulholland Drive (2001)",
	"f3": "The Irishman (2019)",
	"f4": "1917 (2019)",
	"f5": "John Wick (2014)",

	//BOOKS
	"b1": "<i>The Maze Runner</i>James Dashner",
	"b2": "<i>Gone</i>Michael Grant",
	"b3": "<i>Minecraft: Redstone Handbook</i>Nick Farwell",
	"b4": "<i>Nineteen Eighty-Four</i>George Orwell",
	"b5": "<i>The Universe in a Nutshell</i>Stephen Hawking",

	//ALBUMS
	"a1": "Parachutes (2000)<br>Coldplay",
	"a2": "Alive 2007 (2007)<br>Daft Punk",
	"a3": "The Loved Ones (2017)<br>Flyte",
	"a4": "IGOR (2019)<br>Tyler, the Creator",

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