let position;
let velocity;
let r;

function setup() {
  createCanvas(windowWidth, windowHeight);

  position = createVector(width / 2, height / 2);
  velocity = createVector(floor(random(-20, 20)), random(-20, 20));
  r = 40
}

function draw() {
  background(0);
  
  position.add(velocity);
  
  if (position.x + r > width || position.x - r < 0) {
    velocity.x *= -1;
  }
    
  if (position.y + r > height || position.y - r < 0) {
    velocity.y *= -1;
  }
  
  stroke(255),
  fill(200);
  circle(position.x, position.y, r*2);
}
