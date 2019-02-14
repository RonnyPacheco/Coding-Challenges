
let x;
let y;
let dvdlogo;
let r, g, b;
let xspeed;
let yspeed;




function preload(){
    dvd = loadImage("dvd.png");
}
function setup(){
    createCanvas(800, 600);
    x = random(width)
    y = random(height);
    xspeed = 2;
    yspeed = 2;
}

function pickColor(){
    r = random(100, 256);
    g = random(100, 256);
    b = random(100, 256);
}


function draw(){
    background(0);
    //rect(x, y, 80, 60); 
    image(dvd, x, y);
    tint(r, g, b);

    x = x + xspeed;
    y = y + yspeed;

    if((x + dvd.width) >= width){
        xspeed = -xspeed;
        x = width - dvd.width;
        pickColor();
    }else if(x <= 0){
        xspeed = -xspeed;
        x = 0;
        pickColor();
    }
    if(y + dvd.height >= height){
        yspeed = -yspeed;
        y = height - dvd.height;
        pickColor();
    }else if(y <= 0){
        yspeed = -yspeed;
        y =  0;
        pickColor();
    }
}