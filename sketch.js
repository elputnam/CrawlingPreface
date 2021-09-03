var tileCount;
var maxDistance;
var outlineHue;
var fillHue;
var backgroundHue;
let wiggle = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(30);
  tileCount = 40;
  maxDistance = width*.3;
}

function draw() {
  backgroundHue = (map(mouseX, 0, width, 100, 0));
  background(backgroundHue, 10) //, random(100), random(100), 10);
  outlineHue = map(mouseX, 0, width, 50, 200);
  fillHue = map(mouseY, 0, height, 300, 360);
  
  
  for (var gridY = 0; gridY < height; gridY += tileCount) {
    for (var gridX = 0; gridX < width; gridX += tileCount) {
      var diameter = dist(mouseX, mouseY, gridX, gridY);
      diameter = diameter / maxDistance * 40;
      fill(fillHue, random(100), random(100), 50);
      stroke(outlineHue, random(100), random(100), 100);
      push();
      translate(gridX, gridY) //, diameter * 5);
      rectMode(CENTER);
      rect(0, 0, random(diameter), random(diameter)); // also nice: ellipse(...)
      pop();
    }
  }

  for (let j = 0; j <5; j++){ 
    if (frameCount%3==0){
    wiggle = random(200);
    }
    for (let i = 0; i < 20; i++){
      strokeWeight(2);
      stroke(270, random(100), random(50));
      // fill(200, 10);
      // fill(270, random(100), random(50), random(50));
      noFill();
      circle(mouseX+random(-wiggle, wiggle), mouseY+random(-wiggle, wiggle), i*5);
    }
  }
}
