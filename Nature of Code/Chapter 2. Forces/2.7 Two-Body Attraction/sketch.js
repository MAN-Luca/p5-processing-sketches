let bodyA;
let bodyB;

let G = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bodyA = new Body(random(width), random(height));
  bodyB = new Body(320, 200);
  // Assign horizontal velocities (in opposite directions) to each body.
  bodyA.velocity = createVector(random([-1, 0, 1]), random([-1, 0, 1]));
  bodyB.velocity = createVector(random([-1, 0, 1]), random([-1, 0, 1]));
}

function draw() {
  background(0);
  //{!2} A attracts B, and B attracts A.
  bodyA.attract(bodyB);
  bodyB.attract(bodyA);
  
  bodyA.update();
  bodyA.show();
  
  bodyB.update();
  bodyB.show();
}