
let objects = [];
let sun = {
    "name": "Sun",
    "radius": 20,
    "color": "yellow",
    "initx": 0, //potrzebne do resetu
    "inity": 0,
    "initz": 0,
    "x": 0,
    "y": 0,
    "z": 0,
    "vx": 0, //te bêdzie trzeba jakos ustosunkowaæ do obrotu ....
    "vy": 0,
    "vz": 0
};
let earth = {
    "name": "Earth",
    "radius": 8,
    "color": "blue",
    "initx": 80, //potrzebne do resetu
    "inity": 80,
    "initz": 80,
    "x": 80,
    "y": 80,
    "z": 80,
    "vx": 1,
    "vy": 1,
    "vz": 0
};

objects.push(sun);
objects.push(earth);