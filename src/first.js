var canvas = document.getElementById("canvas1");
var time=0;
var running = false;
var timeout=1000;
resizeCanvas(); // resize canvas to 100% of the window

var interval = setInterval('loop()',timeout);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

var ctx = canvas.getContext("2d"),
    cw = canvas.width,
    ch = canvas.height;



function start(){
    running = true;
    document.getElementById("czas").innerHTML= time;
}

function pause() {
    running = false;
    document.getElementById("czas").innerHTML= time;
}

function changeTimeGain() {
    var gain = document.getElementById("time_slider").value;
    console.log(gain);
    clearInterval(interval);
    timeout = 1000/gain;
    interval = setInterval('loop()', timeout);
    document.getElementById("time_gain").innerHTML= gain+"x";
}

function reset() {
    timeout = 1000;
    clearInterval(interval);

    running = false;
    time = 0;
    interval = setInterval('loop()', timeout);

    document.getElementById("time_slider").value = 1;
    document.getElementById("czas").innerHTML= time;
    document.getElementById("time_gain").innerHTML= "1x";




}

function loop() {

    if (running) {
        time++;
        document.getElementById("czas").innerHTML = time;
    }
}

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


































