function changeBackground() {
	//
	var backgroundNumber = Math.floor(Math.random()*3) + 1;
	console.log(backgroundNumber);
	if (backgroundNumber == 0) {
		console.log("got a zero");
	}
	//changes the background!
	//directory starts at index.html location
	if (backgroundNumber == 1) {
		console.log("here");
		document.body.style.background = "url(img/bg2.jpeg)";
	}
	else if (backgroundNumber == 2){
		document.body.style.background = "url(img/bg.jpg)";
	}
	else {
		document.body.style.background = "url(img/bg3.jpg)";
	}

}