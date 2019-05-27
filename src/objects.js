
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
    "name": "Mercury",
    "radius": 4879*radius_scale/2,
    "color": "#808080",
    "circle_time": 87,
    "spin_time": 58,
    "initx": distance_scale*0.3871, //potrzebne do resetu
    "x": 0,
    "init_rotate": 20/360*2*3.14,
    "rotate": 0,
    "info": "Planeta: Merkury " + "<br />" +
        "Promień równikowy: 2440.53 ± 0.04 km " + "<br />"+
        "Średni promień: 2439.4 ± 0.1 km" + "<br />" +
        "Masa: 0.330114 ± 0.000021 x10^24 kg" + "<br />" +
        "Gęstość objętościowa: 5.4291 ± 0.0007 g/cm^3" + "<br />" +
        "Okres obrotu gwiazdowego: 58.6462 dni" + "<br />" +
        "Okres orbity gwiazdowej: 0.2408467 lat" + "<br />" +
        "Grawitacja równikowa: 3.70 m/s^2 " + "<br />" +
        "Prędkość ucieczki: 4.25 km/s " + "<br />"+
        "<img src='https://images-assets.nasa.gov/image/PIA11406/PIA11406~orig.jpg' height='300' width='300' >"

};
let venus = {
    "name": "Venus",
    "radius": 12104*radius_scale/2,
    "color": "#E84405",
    "circle_time": 224,
    "spin_time": 243,
    "initx": distance_scale*0.7233, //potrzebne do resetu
    "x": 0,
    "init_rotate": 20/360*2*3.14,
    "rotate": 0,
    "info": "Planeta: Venus" + "<br />" +
        "Promień równikowy: 6051.8 ± 1.0 km" + "<br />" +
        "Średni promień: 6051.8 ± 1.0 km" + "<br />" +
        "Masa: 4.86747 ± 0.00023 x10^24 kg" + "<br />" +
        "Gęstość objętościowa: 5.243 ± 0.003 g/cm^3" + "<br />" +
        "Okres obrotu gwiazdowego: -243.018 dni" + "<br />" +
        "Okres orbity gwiazdowej: 0.61519726 lat" + "<br />" +
        "Grawitacja równikowa: 8.87 m/s^2" + "<br />" +
        "Prędkość ucieczki: 10.36 km/s" + "<br />"+
        "<img src='https://images-assets.nasa.gov/image/PIA00271/PIA00271~orig.jpg' height='300' width='300' >"
};
let earth = {
    "name": "Earth",
    "radius": 12756*radius_scale/2,
    "color": "#0000FF",
    "circle_time": 365.25,
    "spin_time": 24,
    "initx": distance_scale, //potrzebne do resetu
    "x": 0,
    "init_rotate": 110/360*2*3.14,
    "rotate": 0,
    "info": "Planeta: Earth" + "<br />" +
        "Promień równikowy: 6378.1366 ± 0.0001 km" + "<br />" +
        "Średni promień: 6371.0084 ± 0.0001 km" + "<br />" +
        "Masa: 5.97237 ± 0.00028 x10^24 kg" + "<br />" +
        "Gęstość objętościowa: 5.5136 ± 0.0003 g/cm^3" + "<br />" +
        "Okres obrotu gwiazdowego: 0.99726968 dni" + "<br />" +
        "Okres orbity gwiazdowej: 1.0000174 lat" + "<br />" +
        "Grawitacja równikowa: 9.80 m/s^2" + "<br />" +
        "Prędkość ucieczki: 11.19 km/s" + "<br />"+
        "<img src='https://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg' height='300' width='300' >"
};
let mars = {
    "name": "Mars",
    "radius": 6805*radius_scale/2,
    "color": "#E8050E",
    "circle_time": 686,
    "spin_time": 24,
    "initx": distance_scale*1.5237, //potrzebne do resetu
    "x": 0,
    "init_rotate": 250/360*2*3.14,
    "rotate": 0,
    "info": "Planeta: Mars" + "<br />" +
        "Promień równikowy: 3396.19 ± 0.1 km" + "<br />" +
        "Średni promień: 3389.50 ± 0.2 km" + "<br />" +
        "Masa: 0.641712 ± 0.00030 x10^24 kg" + "<br />" +
        "Gęstość objętościowa: 3.9341 ± 0.0007 g/cm^3" + "<br />" +
        "Okres obrotu gwiazdowego: 1.02595676 dni" + "<br />" +
        "Okres orbity gwiazdowej: 1.8808476 lat" + "<br />" +
        "Grawitacja równikowa: 3.71 m/s^2" + "<br />" +
        "Prędkość ucieczki: 5.03 km/s" + "<br />"+
        "<img src='https://images-assets.nasa.gov/image/PIA04591/PIA04591~orig.jpg' height='300' width='300' >"
};
let jupiter = {
    "name": "Jupiter",
    "radius": 142984*radius_scale/2,
    "color": "#FFDE3A",
    "circle_time": 4333,
    "spin_time": 9,
    "initx": distance_scale*5.2034, //potrzebne do resetu
    "x": 0,
    "init_rotate": 100/360*2*3.14,
    "rotate": 0,
    "info": "Planeta: Jupiter" + "<br />" +
        "Promień równikowy: 71492 ± 4 km" + "<br />" +
        "Średni promień: 69911 ± 6 km" + "<br />" +
        "Masa: 1898.187 ± 0.088 x10^24 kg" + "<br />" +
        "Gęstość objętościowa: 1.3262 ± 0.0003 g/cm^3" + "<br />" +
        "Okres obrotu gwiazdowego: 0.41354 dni" + "<br />" +
        "Okres orbity gwiazdowej: 11.862615 lat" + "<br />" +
        "Grawitacja równikowa: 24.79 m/s^2" + "<br />" +
        "Prędkość ucieczki: 60.20 km/s" + "<br />"+
        "<img src='https://images-assets.nasa.gov/image/PIA00343/PIA00343~orig.jpg' height='300' width='300' >"
};

let saturn = {
    "name": "Saturn",
    "radius": 120536*radius_scale/2,
    "color": "#EBAE53",
    "circle_time": 10756,
    "spin_time": 11,
    "initx": distance_scale*9.5371, //potrzebne do resetu
    "x": 0,
    "init_rotate": 80/360*2*3.14,
    "rotate": 0,
    "info": "Planeta: Saturn <br />" +
        "Promień równikowy: 60268 ± 4 km" + "<br />" +
        "Średni promień: 58232 ± 6 km" + "<br />" +
        "Masa: 568.336 ± 0.026 x10^24 kg" + "<br />" +
        "Gęstość objętościowa: 0.6871 ± 0.0002 g/cm^3" + "<br />" +
        "Okres obrotu gwiazdowego: 0.44401 dni" + "<br />" +
        "Okres orbity gwiazdowej: 29.447498 lat" + "<br />" +
        "Grawitacja równikowa: 10.44 m/s^2" + "<br />" +
        "Prędkość ucieczki: 36.09 km/s" + "<br />"+
        "<img src='https://images-assets.nasa.gov/image/PIA04913/PIA04913~orig.jpg' height='300' width='300' >"
};
let uranus = {
    "name": "Uranus",
    "radius": 51118*radius_scale/2,
    "color": "#7755FF",
    "circle_time": 30707,
    "spin_time": 17,
    "initx": distance_scale*19.1913, //potrzebne do resetu
    "x": 0,
    "init_rotate": 330/360*2*3.14,
    "rotate": 0,
    "info": "Planeta: Uranus" + "<br />" +
        "Promień równikowy: 25559 ± 4 km" + "<br />" +
        "Średni promień: 25362 ± 7 km" + "<br />" +
        "Masa: 86.8127 ± 0.0040 x10^24 kg" + "<br />" +
        "Gęstość objętościowa: 1.270 ± 0.001 g/cm^3" + "<br />" +
        "Okres obrotu gwiazdowego: -0.71833 dni" + "<br />" +
        "Okres orbity gwiazdowej: 84.016846 lat" + "<br />" +
        "Grawitacja równikowa: 8.87 m/s^2" + "<br />" +
        "Prędkość ucieczki: 21.38 km/s" + "<br />"+
        "<img src='https://images-assets.nasa.gov/image/PIA01391/PIA01391~orig.jpg' height='300' width='300' >"
};
let neptune = {
    "name": "Naptune",
    "radius": 49528*radius_scale/2,
    "color": "#95E0FF",
    "circle_time": 60223,
    "spin_time": 16,
    "initx": distance_scale*30.0690, //potrzebne do resetu
    "x": 0,
    "init_rotate": 20/360*2*3.14,
    "rotate": 0,
    "info": "Planeta: Neptune" + "<br />" +
        "Promień równikowy: 24764 ± 15 km" + "<br />" +
        "Średni promień: 24622 ± 19 km" + "<br />" +
        "Masa: 102.4126 ± 0.0048 x10^24 kg" + "<br />" +
        "Gęstość objętościowa: 1.638 ± 0.004 g/cm^3" + "<br />" +
        "Okres obrotu gwiazdowego: 0.67125 dni" + "<br />" +
        "Okres orbity gwiazdowej: 164.79132 lat" + "<br />" +
        "Grawitacja równikowa: 11.15 m/s^2" + "<br />" +
        "Prędkość ucieczki: 23.56 km/s" + "<br />"+
        "<img src='https://images-assets.nasa.gov/image/PIA18182/PIA18182~orig.jpg' height='300' width='300' >"
};

//link do danych umieścić w dokumentacji
//https://ssd.jpl.nasa.gov/?planet_phys_par
sun.img.src = sun.img_url;


objects.push(sun);
objects.push(mercury);
objects.push(venus);
objects.push(earth);
objects.push(mars);
objects.push(jupiter);
objects.push(saturn);
objects.push(uranus);
objects.push(neptune);

for(let item of objects)
{
    item.x=item.initx;
    item.rotate=item.init_rotate;
}