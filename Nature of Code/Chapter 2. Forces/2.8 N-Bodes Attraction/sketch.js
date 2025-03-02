// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let bodies = [];

let G = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    bodies[i] = new Body(random(width), random(height), random(0.1, 5));
  }
}

function draw() {
  background(0);

  for (let i = 0; i < bodies.length; i++) {
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
        let force = bodies[j].attract(bodies[i]);
        bodies[i].applyForce(force);
      }
    }

    bodies[i].update();
    bodies[i].show();
  }
}