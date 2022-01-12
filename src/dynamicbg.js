//test function and some code
function generateBackground() {
	var backgroundNumber = Math.floor(Math.random() * 3);

	if (backgroundNumber == 1) {
		console.log("1");
	}
	if (backgroundNumber == 2) {
		console.log("2");
	}

	changeBackground(backgroundNumber);
}

function changeBackground(backgroundNumber) {
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
	else {
		document.body.style.background = "url(img/bg.jpg)";
	}

}