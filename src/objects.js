
let objects = [];
let distance_scale = 20; // raczej tego nie ruszaj- mniej wiecej wiem po co to jest ale nie chce mi siê pisaæ xDDDDD Marcin
let radius_scale = 1/100000;

//initx jest wyra¿one w jednostkach astronomicznych
// radius to ile razy wiêksze od Ziemii.
let sun = {
    "name": "Sun",
    "radius": 1392000*radius_scale/2, // to podzielona przez 2 bierze siê z st¹d ¿e ŒREDNICA S³oñca jest 109 razy wiêksza od ŒREDNICY Ziemii
    "color": "yellow",
    "circle_time": 0,
    "spin_time": 0,
    "initx": 0, //potrzebne do resetu
    "x": 0,
    "init_rotate": 0,
    "rotate": 0
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
    "rotate": 0
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
    "rotate": 0
};
let earth = {
    "name": "Earth",
    "radius": 12756*radius_scale/2,
    "color": "blue",
    "circle_time": 365.25,
    "spin_time": 24,
    "initx": distance_scale, //potrzebne do resetu
    "x": 0,
    "init_rotate": 110/360*2*3.14,
    "rotate": 0
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
    "rotate": 0
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
    "rotate": 0
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
    "rotate": 0
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
    "rotate": 0
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
    "rotate": 0
};



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