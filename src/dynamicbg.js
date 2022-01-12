var background = "green";

function changeBackground() {
	//
	var backgroundNumber = Math.floor(Math.random()*3) + 1;
	console.log(backgroundNumber);
	if (backgroundNumber == 0) {
		console.log("got a zero");
	}
	document.body.style.backgroundColor = "black";
	window.background = "black";
	if (backgroundNumber == 1) {
		document.body.style.backgroundColor = "red";
		window.background = "red";
	}

	console.log(window.background);
	//changes the background!
	//directory starts at index.html location
	//change up first background image
	/*if (backgroundNumber == 1) {
		console.log("here");
		document.body.style.background = "url(img/bg2.jpeg)";
	}*/
	/*
	if (backgroundNumber == 2){
		document.body.style.background = "url(img/bg.jpg)";
	}
	else {
		document.body.style.background = "url(img/bg3.jpg)";
	}
	*/

}

console.log(window.background);

function newPage(){
	//console.log(window.background);
	document.body.style.backgroundColor = window.background;
}
