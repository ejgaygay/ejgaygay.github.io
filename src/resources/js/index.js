document.getElementById("tabs-top").scrollIntoView();

//called by tabs being clicked.
function gotoId(id) {
    console.log("hello");
    document.getElementById(id).scrollIntoView();
}

//get height of element
console.log(document.getElementById("project-box-1").offsetHeight);
console.log(document.getElementById("project-box-1").offsetWidth);

function setVideoDimensions() {
    console.log("resize");
    var x = document.getElementById("project-box-1").offsetWidth;
    var y = document.getElementById("project-box-1").offsetHeight;

    //videos for projects 25px less each
    x-=25;
    y-=25;

    document.getElementById("project-video1").setAttribute("height", y.toString());
    document.getElementById("project-video1").setAttribute("width", x.toString());
}