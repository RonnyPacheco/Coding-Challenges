function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {

    background(0);
    //moving circles to the middle
    translate(200, 200);
    //rotating to start from top instead of 3 o'clock
    rotate(-90);

    //setting times
    let hours = hour();
    let minutes = minute();
    let seconds = second();

    //pen thickness
    strokeWeight(20);
    //color
    stroke(255, 100, 150);
    noFill();

    //setting up seconds
    let secondAngle = map(seconds, 0, 60, 0, 360);
    arc(0, 0, 320, 320, 0, secondAngle);

    stroke(150, 100, 255);
    let minuteAngle = map(minutes, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, minuteAngle);

    //fill(150, 255, 100);
    stroke(150, 255, 100);
    let hourAngle = map(hours % 12, 0, 12, 0, 360);
    arc(0, 0, 240, 240, 0, hourAngle);

    strokeWeight(8);
    push();
    rotate(secondAngle);
    stroke(255, 100, 150);
    line(0, 0, 100, 0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(150, 100, 255);
    line(0, 0, 75, 0);
    pop();

    push();
    rotate(hourAngle);
    stroke(150, 255, 100);
    line(0, 0, 50, 0);
    pop();


}