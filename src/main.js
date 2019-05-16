/*      main      */

let canvas = document.getElementById("canvas1");
var time=0;
var scale =1;
//month gets value from 0 to 11
//.getTime() returns in milisec
var date_init_ = new Date(2019, 3, 14, 12, 0, 0, 0);
var date_init = date_init_.getTime();
var date_mili = date_init;
var running = 0; // 0 - stop, 1- running, 2 - pause
var timeout=1000;
var timeout_draw=10; // nie zmieniaj, pliska xD Marcin

// resize canvas to 100% of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

writeDate();
setDefaultDate();
var interval = setInterval('loop()',timeout);
var interval_draw = setInterval('draw()',timeout_draw);

// Czy tego poni¿ej  nie mo¿na daæ wy¿ej? Zawrzeæ w main'ie? @Dominik
var ctx = canvas.getContext("2d"),
    cw = canvas.width,
    ch = canvas.height;

ctx.translate(cw/2,ch/2); //Do rotacji mi jest potrzebne- przemieszczam œrodek uk³adu na œrodek strony
ctx.save(); //potrzebne do resetu

/*    end of main    */


function writeDate() {
    document.getElementById("czas").innerHTML = time;
    document.getElementById("data").innerHTML = getDateString(date_mili);
}

function getDateString(milisec){
    let date = new Date(milisec);
    let month = date.getMonth()+1;
    let day_of_month = date.getDate();
    
    if(month<10) month = "0" + month;
    if(day_of_month<10) day_of_month = "0" +day_of_month;
    
    return date.getFullYear() + "-" + month + "-" + day_of_month;
}

function start(){
    running = 1;
    writeDate();
}

function pause() {
    running = 2;
}

function changeTimeGain() {
    let gain = document.getElementById("time_slider").value;
    clearInterval(interval);
    timeout = 1000/gain;
    interval = setInterval('loop()', timeout);
    document.getElementById("time_gain").innerHTML= gain+"x";
}



function reset() {
    timeout = 1000;
    clearInterval(interval);

    clearEverything(); //wyczyœæ wszystko
    ctx.restore(); //przywróc initial state- ³¹czy sie z ctx.save()
    ctx.save(); //zapiszmy ponownie do kolejnego reseta
    for(let item of objects)
    {
        item.x=item.initx; //pocz¹tkowe po³o¿enie
        item.rotate=item.init_rotate;
        circle(item.radius, item.color,item.x ,0); //uk³ad wspó³rzêdnych jest na œrodku strony!
    }

    running = 0;
    time = 0;
    date_mili = date_init;
    interval = setInterval('loop()', timeout);
  
    writeDate();
    document.getElementById("time_slider").value = 1;
    document.getElementById("time_gain").innerHTML= "1x";

    scale=1;

}

function loop() {

    if (running === 1) {
        time++;
        date_mili += (24*60*60*1000); //24hours * 60min * 60sek *1000milisek @Dominik?
        writeDate();
    }
}

function draw()
{   if(running !== 0)
    {
      //ctx.strokeStyle("red");
      let gain = document.getElementById("time_slider").value;
      ctx.save();
      clearEverything(); //wyczyœæ canvas-> nie chcemy ¿eby planeta zostawia³a œlad (przynajmniej na razie xD)
      ctx.restore();
      for (let item of objects)
      {
        if(item.name !== "Sun")
        {
          ctx.save(); //zapisz stan canvas
            let przes =0;
            if (running === 1) {
                przes = (2 * Math.PI * gain / (item.circle_time * 100)); //o ile siê w tej klatce przesunie? Ma na to wp³yw circle_time i iloœæ ?klatek na sekundê?
            }

          ctx.rotate(item.rotate+przes);// obracam uk³ad wspórzêdnych
          circle(item.radius, item.color,item.x ,0); // rysujemy
          planet_arc(item);
          ctx.fillText(item.name,item.x,0);
          item.rotate+=przes; //zmieniamy przesuniêcie w tablicy
          ctx.restore(); //przywracamy oryginalny uk³ad uk³adu wspó³rzêdnych
        }
        else //a S³onko po prostu narysuj
        {circle(item.radius, item.color,item.x ,0);}

          if(item.rotate % item.circle_time === 0){item.rotate=0;} //ogranicza ¿e nie bêdzie mega du¿ych cyfr w tablicy- od 0 do item.circle_time
          
      }
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

function planet_arc(planet)
{
    ctx.strokeStyle = planet.color;
    ctx.beginPath();
    ctx.arc(0,0,planet.x, 0, 2*Math.PI*0.9,true);
    ctx.stroke();
}

function jumpDate(){

    var boxDate=document.getElementById('skokData').value;

    var dates=boxDate.split('-');
    if ( dates.length !=3 || dates[0]<0 || dates[1]<1 || dates[1]>12 || dates[2]<1 || dates[2]>31){
        alert('Nieprawid³owy format daty');
        setDefaultDate();
        return;
    }
    let inputDate = new Date(dates[0], dates[1]-1, dates[2], 12, 0, 0, 0).getTime();
    let skok = (inputDate - date_mili)/(24*60*60*1000);

    time+=skok;
    date_mili+=skok*(24*60*60*1000);

    //!!! below
    for(let item of objects)
    {
        if(item.name !== "Sun")
        {
            item.rotate+=(skok*100)*(2*Math.PI/(item.circle_time*100));
        }
    }
    draw();
    writeDate();

}

function setDefaultDate(){
    var days=date_init_.getDate();
    var month=date_init_.getMonth()+1;
    if (days<10) days="0"+days;
    if (month<10) month="0"+month;

    document.getElementById('skokData').value=date_init_.getFullYear()+"-"+month+"-"+days;
}

function zoomin()
{
    scale*=2;
    clearEverything();
    ctx.scale(scale,scale);
    draw();
}

function zoomout()
{

    clearEverything();
    if(scale >=1)
        ctx.scale(1/scale,1/scale);
    else
        ctx.scale(scale,scale);
    scale/=2;
    draw();
}


/*
Additional links, which should be use in bibliography:

1.  https://www.html5canvastutorials.com/advanced/html5-canvas-animated-solar-system/


 */