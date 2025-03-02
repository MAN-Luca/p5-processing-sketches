function setup() {
  createCanvas(windowWidth, windowHeight);
  mover = new Mover(width / 4, height / 2, 5);
}

function draw() {
  background(0);

  let gravity = createVector(0, 0.2 * mover.mass);
  mover.applyForce(gravity);

  mover.applyLift(0.01); // Appliquer la portance

  mover.update();
  mover.checkEdges();
  mover.show();
}