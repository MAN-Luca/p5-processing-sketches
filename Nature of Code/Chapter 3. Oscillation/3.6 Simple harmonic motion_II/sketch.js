let angle = 0;
let angleVel = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  let amplitude = width / 4;
  let x = amplitude * sin(angle);
  angle += angleVel;
  
  stroke(0);
  fill(127);
  translate(width / 2, height / 2);
  line(0, 0, x, 0);
  circle(x, 0, 48);
  
}