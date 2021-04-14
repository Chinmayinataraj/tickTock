hr = hour();
mn = minute();
sc = second();

function setup() {
    createCanvas(720, 400);
    noStroke();
  }
  
  function draw() {
    background(0);
    // Scale the mouseX value from 0 to 720 to a range between 0 and 175
    scAngle = map(sc,60,0,360);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    arc(50, 55, 50, 50, 0, HALF_PI);
    noFill();
    arc(50, 55, 60, 60, HALF_PI, PI);
    arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
    arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
    arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
  }
  