/*      main      */

var canvas = document.getElementById("canvas1");


var time=0;
//month gets value from 0 to 11
//.getTime() returns in milisec
var date_init = new Date(2019, 3, 14, 12, 0, 0, 0).getTime();
var date_mili = date_init;
var running = false;
var timeout=1000;
var timeout_draw=10; // nie zmieniaj, pliska xD Marcin

resizeCanvas(); // resize canvas to 100% of the window
writeDate();
var interval = setInterval('loop()',timeout);
var interval_draw = setInterval('draw()',timeout_draw); 
/*    end of main    */


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Czy tego poni¿ej  nie mo¿na daæ wy¿ej? Zawrzeæ w main'ie? @Dominik
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
    
    clearEverything(); //wyczyœæ wszystko
    ctx.restore(); //przywróc initial state- ³¹czy sie z ctx.save()
    ctx.save(); //zapiszmy ponownie do kolejnego reseta
    for(let item of objects)
        {
            item.x=item.initx; //pocz¹tkowe po³o¿enie
            item.y=item.inity;
            item.z=item.initz;
            
            circle(item.radius, item.color,item.x ,item.y); //uk³ad wspó³rzêdnych jest na œrodku strony!
        }
    for(let i=0;i<10;i++)
    {rotates[i]=0;} // rotates trzyma obroty planet (ile siê dotychczas obróci³a)

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


//--------- Marcin'a
let rotates = [0,0,0,0,0,0,0,0,0]; //9 rotates bo 9 planet (no powiedzmy 9) RUCH OBIEGOWY
var i = 0; //"iterator" potrzebny do rotates
//---------

function draw()
{   if(running)
    {
      //ctx.strokeStyle("red");
      
      var gain = document.getElementById("time_slider").value;
      ctx.save()
      clearEverything(); //wyczyœæ canvas-> nie chcemy ¿eby planeta zostawia³a œlad (przynajmniej na razie xD)
      ctx.restore();
      i=0;
      for (let item of objects)
      {
        if(item.name!="Sun")
        {
          ctx.save(); //zapisz stan canvas
          var przes = (2*Math.PI*gain/(item.circle_time*100)); //o ile siê w tej klatce przesunie? Ma na to wp³yw circle_time i iloœæ ?klatek na sekundê?
          ctx.rotate(rotates[i]+przes);// obracam uk³ad wspórzêdnych
          circle(item.radius, item.color,item.x ,item.y); // rysujemy
          planet_arc(item);
          ctx.fillText(item.name,item.x,item.y);
          rotates[i]+=przes; //zmieniamy przesuniêcie w tablicy
          ctx.restore(); //przywracamy oryginalny uk³ad uk³adu wspó³rzêdnych
        }
        else //a S³onko po prostu narysuj
        {circle(item.radius, item.color,item.x ,item.y);}
        if(rotates[i]%item.circle_time==0){rotates[i]=0;} //ogranicza ¿e nie bêdzie mega du¿ych cyfr w tablicy- od 0 do item.circle_time
        i=i+1;
        
          
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

function jump()
{
    if(running)
    {
        //poda³ ile dni skoczyæ do przodu
        var skok_string = document.getElementById("skok").value;
        var skok = parseInt(skok_string, 10);
        
        time+=skok;
        date_mili+=skok*(24*60*60*1000);
    
        //!!! below
        i=0;
        for(let item of objects)
        {
            if(item.name!="Sun")
            {
                rotates[i]+=(skok*100)*(2*Math.PI/(item.circle_time*100));
            }
            i+=1;
        }
        //draw();
    }
}


/*
Additional links, which should be use in bibliography:

1.  https://www.html5canvastutorials.com/advanced/html5-canvas-animated-solar-system/


 */