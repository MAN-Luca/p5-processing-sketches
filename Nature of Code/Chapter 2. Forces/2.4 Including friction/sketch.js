let mover;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mover = new Mover(width / 2, height / 2 - height / 4, 5);
}

function draw() {
  background(0);

  let gravity = createVector(0, 1);
  gravity.mult(mover.mass);
  mover.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = createVector(0.5, 0);
    mover.applyForce(wind);
  }

  if (mover.contactEdge()) {

    let c = 0.1;
    let friction = mover.velocity.copy();
    friction.mult(-1);
    friction.setMag(c);

    mover.applyForce(friction);
  }

  mover.bounceEdges();
  mover.update();
  mover.show();
}