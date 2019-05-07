/*      main      */

let canvas = document.getElementById("canvas1");
var time=0;

//month gets value from 0 to 11
//.getTime() returns in milisec
var date_init = new Date(2019, 3, 14, 12, 0, 0, 0).getTime();
var date_mili = date_init;
var running = false;
var timeout=1000;
var timeout_draw=10; // nie zmieniaj, pliska xD Marcin

// resize canvas to 100% of the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

writeDate();
var interval = setInterval('loop()',timeout);
var interval_draw = setInterval('draw()',timeout_draw);

// Czy tego poni�ej  nie mo�na da� wy�ej? Zawrze� w main'ie? @Dominik
var ctx = canvas.getContext("2d"),
    cw = canvas.width,
    ch = canvas.height;
    ctx.translate(cw/2,ch/2); //Do rotacji mi jest potrzebne- przemieszczam �rodek uk�adu na �rodek strony
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
    running = true;
    writeDate();
}

function pause() {
    running = false;
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
    
    clearEverything(); //wyczy�� wszystko
    ctx.restore(); //przywr�c initial state- ��czy sie z ctx.save()
    ctx.save(); //zapiszmy ponownie do kolejnego reseta
    for(let item of objects)
    {
        item.x=item.initx; //pocz�tkowe po�o�enie
        item.rotate=item.init_rotate;
        circle(item.radius, item.color,item.x ,0); //uk�ad wsp�rz�dnych jest na �rodku strony!
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
{   if(running)
    {
      //ctx.strokeStyle("red");
      
      let gain = document.getElementById("time_slider").value;
      ctx.save();
      clearEverything(); //wyczy�� canvas-> nie chcemy �eby planeta zostawia�a �lad (przynajmniej na razie xD)
      ctx.restore();
      //i=0;
      for (let item of objects)
      {
        if(item.name !== "Sun")
        {
          ctx.save(); //zapisz stan canvas
          let przes = (2*Math.PI*gain/(item.circle_time*100)); //o ile si� w tej klatce przesunie? Ma na to wp�yw circle_time i ilo�� ?klatek na sekund�?
          ctx.rotate(item.rotate+przes);// obracam uk�ad wsp�rz�dnych
          circle(item.radius, item.color,item.x ,0); // rysujemy
          planet_arc(item);
          ctx.fillText(item.name,item.x,0);
          item.rotate+=przes; //zmieniamy przesuni�cie w tablicy
          ctx.restore(); //przywracamy oryginalny uk�ad uk�adu wsp�rz�dnych
        }
        else //a S�onko po prostu narysuj
        {circle(item.radius, item.color,item.x ,0);}

        if(item.rotate % item.circle_time === 0){item.rotate=0;} //ogranicza �e nie b�dzie mega du�ych cyfr w tablicy- od 0 do item.circle_time
          
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
        //poda� ile dni skoczy� do przodu
        let skok_string = document.getElementById("skok").value;
        let skok = parseInt(skok_string, 10);
        
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
    }
}


/*
Additional links, which should be use in bibliography:

1.  https://www.html5canvastutorials.com/advanced/html5-canvas-animated-solar-system/


 */