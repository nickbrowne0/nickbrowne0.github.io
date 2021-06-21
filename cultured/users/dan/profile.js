var name = "Dan Lum";
var place = "Sydney";

var dict = {

	//FILMS
	"f1": "La La Land (2016)",
	"f2": "Birdman or (The Unexpected Virtue of Ignorance) (2016)",
	"f3": "Magnolia (1999)",
	"f4": "Do the Right Thing (1989)",
	"f5": "Synecdoche, New York (2008)",

	//BOOKS
	"b1": "<i>The English Patient</i>Michael Ondaatje",
	"b2": "<i>Catch-22</i>Joseph Heller",
	"b3": "<i>Catcher in the Rye</i>J.D. Salinger",
	"b4": "<i>Schindler's Ark</i>Thomas Keneally",
	"b5": "<i>Bridge of Clay</i>Markus Zusak",

	//ALBUMS
	"a1": "Flower Boy (2017)<br>Tyler, The Creator",
	"a2": "My Beautiful Dark Twisted Fantasy (2010)<br>Kanye West",
	"a3": "Ready to Die (1994)<br>The Notorious B.I.G.",
	"a4": "Unknown Pleasures (1979)<br>Joy Division",

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