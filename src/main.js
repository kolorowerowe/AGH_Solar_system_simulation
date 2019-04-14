/*      main      */

var canvas = document.getElementById("canvas1");


var time=0;
//month gets value from 0 to 11
//.getTime() returns in milisec
var date_init = new Date(2019, 3, 14, 12, 0, 0, 0).getTime();
var date_mili = date_init;
var running = false;
var timeout=1000;

resizeCanvas(); // resize canvas to 100% of the window
writeDate();
var interval = setInterval('loop()',timeout);

/*    end of main    */



function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

var ctx = canvas.getContext("2d"),
    cw = canvas.width,
    ch = canvas.height;

function writeDate() {
    document.getElementById("czas").innerHTML = time;
    document.getElementById("data").innerHTML = getDateString(date_mili);
}

function getDateString(milisec){
    var date = new Date(milisec);
    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
}

function start(){
    running = true;
    writeDate();
}

function pause() {
    running = false;

}

function changeTimeGain() {
    var gain = document.getElementById("time_slider").value;
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
    date_mili = date_init;
    interval = setInterval('loop()', timeout);

    writeDate();
    document.getElementById("time_slider").value = 1;
    document.getElementById("time_gain").innerHTML= "1x";

}

function loop() {

    if (running) {
        time++;
        date_mili += (24*60*60*1000);
        writeDate();
    }
}

function draw() {

    for (let item of objects) {
        circle(item.radius, item.color, cw / 2 + item.x , ch / 2 + item.y);
    }

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


































