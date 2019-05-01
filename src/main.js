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

var drawinterval = setInterval('draw()',60); //jak to pozmieniasz to siê "fajniej" Ziemi bêdzie krêciæ xD

/*    end of main    */


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Czy tego nie mo¿na daæ wy¿ej? Zawrzeæ w main'ie? @Dominik
var ctx = canvas.getContext("2d"),
    cw = canvas.width,
    ch = canvas.height;
    ctx.translate(cw/2,ch/2); //Do rotacji mi jest potrzebne- przemieszczam œrodek uk³adu na œrodek strony
    ctx.save(); //potrzebne do resetu
//end zawarcia w main'ie

function writeDate() {
    document.getElementById("czas").innerHTML = time;
    document.getElementById("data").innerHTML = getDateString(date_mili);
}

function getDateString(milisec){
    var date = new Date(milisec);
    var month = date.getMonth()+1;
    var day_of_month = date.getDate()
    
    if(month<10) month = "0" + month;
    if(day_of_month<10) day_of_month = "0" +day_of_month
    
    return date.getFullYear() + "-" + month + "-" + day_of_month;
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
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); //wyczyœæ canvasa
    ctx.restore(); //przywróc initial state- ³¹czy sie z ctx.save()
    ctx.save(); //zapiszmy ponownie do kolejnego reseta
    for(let item of objects)
        {
            item.x=item.initx; //pocz¹tkowe po³o¿enie
            item.y=item.inity;
            item.z=item.initz;
            
            circle(item.radius, item.color,item.x ,item.y); //uk³ad wspó³rzêdnych jest na œrodku strony!
        }

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
        date_mili += (24*60*60*1000); //24hours * 60min * 60sek *1000milisek @Dominik?
        writeDate();
    }
}


function draw()
{   if(running){
      
      ctx.clearRect(0, 0, canvas.width, canvas.height); //wyczyœæ canvase-> nie chcemy ¿eby planeta zostawia³a œlad (przynajmniej na razie xD)
      var gain = document.getElementById("time_slider").value;
      for (let item of objects)
      {
          ctx.rotate((2*Math.PI/360)*gain);// obracam uk³ad wspórzêdnych (bêdzie trochê inne ale na razie niech siedzi- obrót bêdzie zale¿ny od planety)
          circle(item.radius, item.color,item.x ,item.y);
      }
      //var drawInterwal = setInterval('draw()',timeout);
    }
}

function clearEverything() {
    //cw- canvas width, ch- canwas height
    ctx.translate(-(cw/2),-(ch/2));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate((cw/2),(ch/2))
    
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

































