var red, blue, purple, colours;
red="#BB342F"
blue="#DDA448"
purple="#8D6A9F"
colours=[red, blue, purple];

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(255, 0, 0); 
  frameRate(10);
  textSize(100);
}


function draw() {
  //background(255, 0, 0, 10);
  //strokeWeight(3);
  fill(random(colours));
  //stroke(128, 0, 128);
  square(random(height), random(width), random(height/2), random(width/2), random(500));
  circle(random(height), random(width), random(height/2), random(width/2), random(300));
  //line(mouseX, mouseY, width/2, height/7);
  text("HIIIII!!!!", width/2, height/2);
}


function mousePressed(){
 background(random(256), random(256), random(256));
}
