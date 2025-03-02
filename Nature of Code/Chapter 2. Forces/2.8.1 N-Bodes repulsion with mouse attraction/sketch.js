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
    // 1. Attraction vers la souris
    let mouseVect = createVector(mouseX, mouseY);
    let mouseDir = p5.Vector.sub(mouseVect, bodies[i].position); // Corrected direction
    let mouseDist = constrain(mouseDir.mag(), 10, 300); // Évite des forces extrêmes
    let attractForce = (G * bodies[i].mass) / (mouseDist * mouseDist);
    mouseDir.setMag(0.1 + attractForce);
    bodies[i].applyForce(mouseDir);

    // 2. Répulsion entre les corps
    for (let j = 0; j < bodies.length; j++) {
      if (i !== j) {
        let repulsionForce = bodies[j].repeal(bodies[i]);
        bodies[i].applyForce(repulsionForce);
      }
    }

    bodies[i].update();
    bodies[i].show();
  }
}