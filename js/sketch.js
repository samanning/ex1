console.log("hello reading from js");

var x = 0;
var pupilLx;
var pupilLy;
var pupilRx;
var pupilRy;
var r, g, b;

function setup() {

    var myCanvas = createCanvas(800, 250);
    // link to id mysketch from header tag
    myCanvas.parent('mySketch');

}


function draw() {
    drawCreature();
    moveEyes();
    moveArms();
    changeColor();
}

function drawCreature() {
    // Make creature move in direction of mouse cursor
    if (mouseX > 300 && x < 620) {
        x++;
    } // left side
    if (mouseX <= 300 && x > -70) {
        x--;
    } // right side

    background(235);
    noFill();

    // antenna bulb
    stroke(125, 122, 0);
    strokeWeight(1);
    fill(250, 245, 0);
    ellipse(x + 125, 40, 7, 7);

    //antenna rod
    stroke(120);
    strokeWeight(4);
    line(x + 125, 44, x + 125, 60);

    // neck
    line(x + 125, 100, x + 125, 110);

    // leg
    line(x + 125, 180, x + 125, 200);

    noStroke(); // No stroke for head & body

    // head
    fill(255, 127, 80); //red orange
    triangle(x + 80, 100, x + 125, 60, x + 170, 100);

    // eye box
    fill(248, 248, 255);
    rect(x + 105, 80, 40, 10);

    // body
    fill(255, 127, 80); //red orange
    rect(x + 90, 110, 70, 70);

    // triangle body design
    fill(180, 232, 231); // light blue
    triangle(x + 90, 180, x + 125, 140, x + 160, 180);

    // shoulders
    ellipse(x + 80, 120, 19, 19);
    ellipse(x + 170, 120, 19, 19);

    // wheel
    stroke(100);
    strokeWeight(5);
    fill(200);
    ellipse(x + 125, 210, 20, 20);
} // drawCreature

function moveEyes() {
    noStroke();
    // left pupil
    pupilLx = map(mouseX, 0, width, 111, 124);
    pupilLy = map(mouseY, 0, height, 84, 86);
    fill(0);
    ellipse(x + pupilLx, pupilLy, 5, 5);

    // right pupil
    pupilRx = map(mouseX, 0, width, 125, 138);
    pupilRy = map(mouseY, 0, height, 84, 86);
    fill(0);
    ellipse(x + pupilRx, pupilRy, 5, 5);
} // moveEyes

function moveArms() {
    stroke(120);
    strokeWeight(4);

    //left arm
    line(x + 80, 130, x + 80, 175);

    //right arm
    line(x + 170, 130, x + 170, 175);
} // moveArms

function changeColor(){
  // pupil and antenna turns random color
  r = random(255);
  g = random(255);
  b = random(255);
  
  if(mouseIsPressed){
  fill(r,g,b); 
  stroke(r,g,b);
  strokeWeight(1);
  ellipse(x + pupilLx,pupilLy,8,8); // left pupil
  ellipse(x + pupilRx,pupilRy,8,8); // right pupil
  ellipse(x + 125,40,8,8);// antenna
  }// if mouse is pressed
}