﻿
let objects = [];
let distance_scale = 20; // raczej tego nie ruszaj- mniej wiecej wiem po co to jest ale nie chce mi się pisać xDDDDD Marcin
let radius_scale = 1/100000;

//initx jest wyrażone w jednostkach astronomicznych
// radius to ile razy większe od Ziemii.
let sun = {
    "name": "Sun",
    "radius": 1392000*radius_scale/2, // to podzielona przez 2 bierze się z stąd że ŚREDNICA Słońca jest 109 razy większa od ŚREDNICY Ziemii
    "color": "yellow",
    "circle_time": 0,
    "spin_time": 0,
    "initx": 0, //potrzebne do resetu
    "x": 0,
    "init_rotate": 0,
    "rotate": 0,

    "img": new Image(),
    "img_url": 'src/img/slonce.png',
    "img_width": 15,
    "img_height":15
};
let mercury = {
    "name": "Merkury",
    "radius": 4879*radius_scale/2,
    "color": "#808080",
    "circle_time": 87.969,
    "spin_time": 58,
    "initx": distance_scale*0.3871, //potrzebne do resetu
    "x": 0,
    "init_rotate": 346/360*2*3.14,
    "rotate": 0,
    "info": "<b>Planeta:</b> <span style=\"color: #808080; font-size: 40px;\"> Merkury </span>" + "<br />" +
            "<b>Aktualny obrót:</b> " + "<div id='obrot'></div>" + "<br />" +
            "<b>Promień równikowy:</b> 2440.53 ± 0.04 km " + "<br />"+
            "<b>Średni promień:</b> 2439.4 ± 0.1 km" + "<br />" +
            "<b>Masa:</b> 0.330114 ± 0.000021 x10<sup>24</sup> kg" + "<br />" +
            "<b>Gęstość objętościowa:</b> 5.4291 ± 0.0007"+" g/cm<sup>3</sup>" + "<br />" +
            "<b>Okres obrotu gwiazdowego:</b> 58.6462 dni" + "<br />" +
            "<b>Okres orbity gwiazdowej:</b> 0.2408467 lat" + "<br />" +
            "<b>Grawitacja równikowa:</b> 3.70 m/s^2 " + "<br />" +
            "<b>Prędkość ucieczki:</b> 4.25 km/s " + "<br />"+
            "<img src='src/img/merkury.jpg' height='200' width='300' >"

};
let venus = {
    "name": "Wenus",
    "radius": 12104*radius_scale/2,
    "color": "#E84405",
    "circle_time": 224.701,
    "spin_time": 243,
    "initx": distance_scale*0.7233, //potrzebne do resetu
    "x": 0,
    "init_rotate": 215/360*2*3.14,
    "rotate": 0,
    "info": "<b>Planeta:</b> <span style=\"color: #E84405; font-size: 40px;\"> Wenus </span>" + "<br />" +
            "<b>Aktualny obrót:</b> " + "<div id='obrot'></div>" + "<br />" +
            "<b>Promień równikowy:</b> 6051.8 ± 1.0 km" + "<br />" +
            "<b>Średni promień:</b> 6051.8 ± 1.0 km" + "<br />" +
            "<b>Masa:</b> 4.86747 ± 0.00023 x10<sup>24</sup> kg" + "<br />" +
            "<b>Gęstość objętościowa:</b> 5.243 ± 0.003"+" g/cm<sup>3</sup>" + "<br />" +
            "<b>Okres obrotu gwiazdowego:</b> -243.018 dni" + "<br />" +
            "<b>Okres orbity gwiazdowej:</b> 0.61519726 lat" + "<br />" +
            "<b>Grawitacja równikowa:</b> 8.87 "+" m/s<sup>2</sup>" + "<br />" +
            "<b>Prędkość ucieczki:</b> 10.36 km/s" + "<br />"+
            "<img src='src/img/venus.jpg' height='300' width='300' >"
};
let earth = {
    "name": "Ziemia",
    "radius": 12756*radius_scale/2,
    "color": "#0000FF",
    "circle_time": 365.25,
    "spin_time": 24,
    "initx": distance_scale, //potrzebne do resetu
    "x": 0,
    "init_rotate": 76/360*2*3.14,
    "rotate": 0,
    "info": "<b>Planeta:</b> <span style=\"color: #0000FF; font-size: 40px;\"> Ziemia </span>" + "<br />" +
            "<b>Aktualny obrót:</b> " + "<div id='obrot'></div>" + "<br />" +
            "<b>Promień równikowy:</b> 6378.1366 ± 0.0001 km" + "<br />" +
            "<b>Średni promień:</b> 6371.0084 ± 0.0001 km" + "<br />" +
            "<b>Masa:</b> 5.97237 ± 0.00028 x10<sup>24</sup> kg" + "<br />" +
            "<b>Gęstość objętościowa:</b> 5.5136 ± 0.0003"+" g/cm<sup>3</sup>" + "<br />" +
            "<b>Okres obrotu gwiazdowego:</b> 0.99726968 dni" + "<br />" +
            "<b>Okres orbity gwiazdowej:</b> 1.0000174 lat" + "<br />" +
            "<b>Grawitacja równikowa:</b> 9.80 "+" m/s<sup>2</sup>" + "<br />" +
            "<b>Prędkość ucieczki:</b> 11.19 km/s" + "<br />"+
            "<img src='src/img/earth.jpg' height='300' width='300' >"
};
let mars = {
    "name": "Mars",
    "radius": 6805*radius_scale/2,
    "color": "#E8050E",
    "circle_time": 686.960,
    "spin_time": 24,
    "initx": distance_scale*1.5237, //potrzebne do resetu
    "x": 0,
    "init_rotate": 302/360*2*3.14,
    "rotate": 0,
    "info": "<b>Planeta:</b> <span style=\"color: #E8050E; font-size: 40px;\"> Mars </span>" + "<br />" +
            "<b>Aktualny obrót:</b> " + "<div id='obrot'></div>" + "<br />" +
            "<b>Promień równikowy:</b> 3396.19 ± 0.1 km" + "<br />" +
            "<b>Średni promień:</b> 3389.50 ± 0.2 km" + "<br />" +
            "<b>Masa:</b> 0.641712 ± 0.00030 x10<sup>24</sup> kg" + "<br />" +
            "<b>Gęstość objętościowa:</b> 3.9341 ± 0.0007"+" g/cm<sup>3</sup>" + "<br />" +
            "<b>Okres obrotu gwiazdowego:</b> 1.02595676 dni" + "<br />" +
            "<b>Okres orbity gwiazdowej:</b> 1.8808476 lat" + "<br />" +
            "<b>Grawitacja równikowa:</b> 3.71 "+" m/s<sup>2</sup>" + "<br />" +
            "<b>Prędkość ucieczki:</b> 5.03 km/s" + "<br />"+
            "<img src='src/img/mars.png' height='300' width='300' >"
};


let asteroids = {
    "name": "Pas asteroid",
    "radius": 1*radius_scale/2,
    "color": "#DCE1EA",
    "circle_time": 100000,
    "spin_time": 1,
    "initx": distance_scale*2.5, //potrzebne do resetu
    "x": 0,
    "init_rotate": 0,
    "rotate": 0,
    "info": "<b>Obiekt:</b> <span style=\"color: #DCE1EA; font-size: 40px;\"> Pas asteroid </span>" + "<br />" +
            "<b>Odległość od Słońca:</b> 1.7AU - 4AU (większość ciał 2AU-3AU)" + "<br />" +
            "<b>Masa całk.:</b> 3.3 ± 0.3 x10<sup>21</sup> kg" + "<br />" +
            "<b> Największe obiekty:</b> Ceres, Westa, Pallas i Hygiea <br>" +
            "<img src='src/img/aster.jpg' height='200' width='380' >"
};

let jupiter = {
    "name": "Jowisz",
    "radius": 142984*radius_scale/2,
    "color": "#FFDE3A",
    "circle_time": 4333.287,
    "spin_time": 9,
    "initx": distance_scale*5.2034, //potrzebne do resetu
    "x": 0,
    "init_rotate": 78/360*2*3.14,
    "rotate": 0,
    "info": "<b>Planeta:</b><span style=\"color: #FFDE3A; font-size: 40px;\"> Jowisz </span>" + "<br />" +
            "<b>Aktualny obrót:</b> " + "<div id='obrot'></div>" + "<br />" +
            "<b>Promień równikowy:</b> 71492 ± 4 km" + "<br />" +
            "<b>Średni promień:</b> 69911 ± 6 km" + "<br />" +
            "<b>Masa:</b> 1898.187 ± 0.088 x10<sup>24</sup> kg" + "<br />" +
            "<b>Gęstość objętościowa:</b> 1.3262 ± 0.0003"+" g/cm<sup>3</sup>"+ "<br />" +
            "<b>Okres obrotu gwiazdowego:</b> 0.41354 dni" + "<br />" +
            "<b>Okres orbity gwiazdowej:</b> 11.862615 lat" + "<br />" +
            "<b>Grawitacja równikowa:</b> 24.79"+" m/s<sup>2</sup>" + "<br />" +
            "<b>Prędkość ucieczki:</b> 60.20 km/s" + "<br />"+
            "<img src='src/img/jupiter.jpg' height='300' width='300' >"
};

let saturn = {
    "name": "Saturn",
    "radius": 120536*radius_scale/2,
    "color": "#EBAE53",
    "circle_time": 10756.2,
    "spin_time": 11,
    "initx": distance_scale*9.5371, //potrzebne do resetu
    "x": 0,
    "init_rotate": 106/360*2*3.14,
    "rotate": 0,
    "info": "<b>Planeta:</b><span style=\"color: #EBAE53; font-size: 40px;\"> Saturn </span>\" <br />" +
            "<b>Aktualny obrót:</b> " + "<div id='obrot'></div>" + "<br />" +
            "<b>Promień równikowy:</b> 60268 ± 4 km" + "<br />" +
            "<b>Średni promień:</b> 58232 ± 6 km" + "<br />" +
            "<b>Masa:</b> 568.336 ± 0.026 x10<sup>24</sup> kg" + "<br />" +
            "<b>Gęstość objętościowa:</b> 0.6871 ± 0.0002"+" g/cm<sup>3</sup>" + "<br />" +
            "<b>Okres obrotu gwiazdowego:</b> 0.44401 dni" + "<br />" +
            "<b>Okres orbity gwiazdowej:</b> 29.447498 lat" + "<br />" +
            "<b>Grawitacja równikowa:</b> 10.44 "+" m/s<sup>2</sup>" + "<br />" +
            "<b>Prędkość ucieczki:</b> 36.09 km/s" + "<br />"+
            "<img src='src/img/saturn.jpg' height='200' width='300' >"
};
let uranus = {
    "name": "Uran",
    "radius": 51118*radius_scale/2,
    "color": "#95E0FF",
    "circle_time": 30707.49,
    "spin_time": 17,
    "initx": distance_scale*19.1913, //potrzebne do resetu
    "x": 0,
    "init_rotate": 213/360*2*3.14,
    "rotate": 0,
    "info": "<b>Planeta:</b> <span style=\"color: #95E0FF; font-size: 40px;\"> Uran </span>" + "<br />" +
            "<b>Aktualny obrót:</b> " + "<div id='obrot'></div>" + "<br />" +
            "<b>Promień równikowy:</b> 25559 ± 4 km" + "<br />" +
            "<b>Średni promień:</b> 25362 ± 7 km" + "<br />" +
            "<b>Masa:</b> 86.8127 ± 0.0040 x10<sup>24</sup> kg" + "<br />" +
            "<b>Gęstość objętościowa:</b> 1.270 ± 0.001"+" g/cm<sup>3</sup>" + "<br />" +
            "<b>Okres obrotu gwiazdowego:</b> -0.71833 dni" + "<br />" +
            "<b>Okres orbity gwiazdowej:</b> 84.016846 lat" + "<br />" +
            "<b>Grawitacja równikowa:</b> 8.87 "+" m/s<sup>2</sup>" + "<br />" +
            "<b>Prędkość ucieczki:</b> 21.38 km/s" + "<br />"+
            "<img src='src/img/uranus.jpg' height='300' width='300' >"
};
let neptune = {
    "name": "Neptun",
    "radius": 49528*radius_scale/2,
    "color": "#7755FF",
    "circle_time": 60223.353,
    "spin_time": 16,
    "initx": distance_scale*30.0690, //potrzebne do resetu
    "x": 0,
    "init_rotate": 167/360*2*3.14,
    "rotate": 0,
    "info": "<b>Planeta:</b> <span style=\"color: #7755FF; font-size: 40px;\"> Neptun </span>" + "<br />" +
            "<b>Aktualny obrót:</b> " + "<div id='obrot'></div>" + "<br />" +
            "<b>Promień równikowy:</b> 24764 ± 15 km" + "<br />" +
            "<b>Średni promień:</b> 24622 ± 19 km" + "<br />" +
            "<b>Masa:</b> 102.4126 ± 0.0048 x10<sup>24</sup> kg" + "<br />" +
            "<b>Gęstość objętościowa:</b> 1.638 ± 0.004"+" g/cm<sup>3</sup>" + "<br />" +
            "<b>Okres obrotu gwiazdowego:</b> 0.67125 dni" + "<br />" +
            "<b>Okres orbity gwiazdowej:</b> 164.79132 lat" + "<br />" +
            "<b>Grawitacja równikowa:</b> 11.15 "+" m/s<sup>2</sup>" + "<br />" +
            "<b>Prędkość ucieczki:</b> 23.56 km/s" + "<br />"+
            "<img src='src/img/neptune.jpg' height='300' width='300' >"
};

//link do danych umieścić w dokumentacji
//https://ssd.jpl.nasa.gov/?planet_phys_par
sun.img.src = sun.img_url;


objects.push(sun);
objects.push(mercury);
objects.push(venus);
objects.push(earth);
objects.push(mars);
objects.push(asteroids);
objects.push(jupiter);
objects.push(saturn);
objects.push(uranus);
objects.push(neptune);

for(let item of objects)
{
    item.x=item.initx;
    item.rotate=item.init_rotate;
}