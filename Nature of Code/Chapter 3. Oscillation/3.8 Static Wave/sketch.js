let angle = 0;
let deltaAngle = 0.2;
let amplitude = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0);
  fill(127, 127);
  for (let x = 0; x <= width; x += 10) {
    let y = amplitude * sin(angle);
    circle(x, y + height / 2, 48);
    angle += deltaAngle;
  }
}
