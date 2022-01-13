//sets/changes the background of the page
function changeBackground() {
	var backgroundNumber = Math.floor(Math.random()*3) + 1;
	console.log(backgroundNumber);
	if (backgroundNumber == 1) {
		document.body.style.backgroundColor = "black";
	}
	else if (backgroundNumber == 2) {
		document.body.style.backgroundColor = "darkgrey";
	}
	else {
		document.body.style.backgroundColor = "dimgray";
	}

	localStorage.setItem("backgroundColor",document.body.style.backgroundColor);
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

//sets the background whenever a new page opens
function newPage(){
	//on new user first visit, set a background
	if (document.body.style.backgroundColor == null) {
		changeBackground();
	}
	else {
		document.body.style.backgroundColor = localStorage.getItem("backgroundColor");
	}
}
