let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Deux objets avec masses et coefficients de friction différents
  movers.push(new Mover(width / 4, height / 4, 5, 0.2)); // Plus lourd, plus de friction
  movers.push(new Mover(width / 2, height / 4, 2, 0.1)); // Plus léger, moins de friction
  movers.push(new Mover(width - width / 4, height / 4, 15, 0.3));
}

function draw() {
  background(0);

  for (let mover of movers) {
    let gravity = createVector(0, 1);
    gravity.mult(mover.mass);
    mover.applyForce(gravity);

    if (mouseIsPressed) {
      let wind = createVector(0.5, 0);
      mover.applyForce(wind);
    }

    mover.bounceEdges();
    mover.applyFriction();
    mover.update();
    mover.show();
  }
}
