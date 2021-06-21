var name = "Luke Schofield";
var place = "Sydney";
var bio = "";

var dict = {

	//FILMS
	"f1": "Persona (1966)",
	"f2": "Synecdoche, New York (2008)",
	"f3": "Come and See (1985)",
	"f4": "Manchester by the Sea (2016)",
	"f5": "Call Me by Your Name (2017)",

	//BOOKS
	"b1": "<i>Frankenstein; or, The Modern Prometheus</i>Mary Shelley",
	"b2": "<i>The Road</i>Cormac McCarthy",
	"b3": "<i>Heart of Darkness</i>Joseph Conrad",
	"b4": "<i>The Picture of Dorian Gray</i>Oscar Wilde",
	"b5": "<i>One Day in the Life of Ivan Denisovich</i>Aleksandr Solzhenitsyn",

	//ALBUMS
	"a1": "I like it when you sleep, for you are so beautiful yet so unaware of it (2016)<br>The 1975",
	"a2": "Notes on a Conditional Form (2020)<br>The 1975",
	"a3": "The 1975 (2013)<br>The 1975",
	"a4": "A Brief Inquiry into Online Relationships (2018)<br>The 1975",

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