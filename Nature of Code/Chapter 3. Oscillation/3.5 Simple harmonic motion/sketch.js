function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  
  let period = 120; // 120 frames pour un cycle
  let amplitude = width / 4;
  let x = amplitude * sin(TWO_PI * frameCount / period);
  
  stroke(0);
  fill(127);
  translate(width / 2, height / 2);
  line(0, 0, x, 0);
  circle(x, 0, 48);
  
}