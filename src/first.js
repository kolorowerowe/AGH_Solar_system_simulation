var canvas = document.getElementById("canvas1");

resizeCanvas();             // resize canvas to 100% of the window
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

var ctx = canvas.getContext("2d"),
    cw = canvas.width,
    ch = canvas.height;

function draw() {

    // Sun
    circle(20,"yellow",cw/2,ch/2);    // x and y are 0 because ctx is in the middle of canvas


}

function clearEverything() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function circle(radius,color,x,y){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
}




/*
Additional links, which should be use in bibliography:

1.  https://www.html5canvastutorials.com/advanced/html5-canvas-animated-solar-system/


 */


































