let movers = [];
let attractors = [];

let G = 1.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255); // Conserver les traces

  // Créer plusieurs Movers
  for (let i = 0; i < 20; i++) {
    movers.push(new Mover(random(width), random(height), random(0.5, 3)));
  }

  // Créer plusieurs Attractors
  for (let i = 0; i < 5; i++) {
    attractors.push(
      new Attractor(random(width), random(height), random(20, 50))
    );
  }
}

function draw() {
  noStroke();
  fill(255, 10);
  rect(0, 0, width, height);

  for (let mover of movers) {
    for (let attractor of attractors) {
      let force = attractor.attract(mover);
      mover.applyForce(force);
    }
    mover.update();
    mover.show();
  }
}
