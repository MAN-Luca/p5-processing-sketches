let movers = [];
let selectedMover = null;
let dragStart = null;

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
    if (mover !== selectedMover) {
      let gravity = createVector(0, 1);
      gravity.mult(mover.mass);
      mover.applyForce(gravity);

      mover.bounceEdges();
      mover.applyFriction();
      mover.update();
    }

    if (selectedMover && dragStart) {
      stroke(255);
      line(mouseX, mouseY, selectedMover.position.x, selectedMover.position.y);
    }
    mover.show();
  }
}

function mousePressed() {
  for (let mover of movers) {
    let d = dist(mouseX, mouseY, mover.position.x, mover.position.y);
    if (d < mover.radius) {
      selectedMover = mover;
      dragStart = createVector(mouseX, mouseY);
      mover.velocity.set(0, 0); // On arrête le mouvement quand on drag le cercle
    }
  }
}

function mouseReleased() {
  if (selectedMover && dragStart) {
    let dragEnd = createVector(mouseX, mouseY);
    let force = p5.Vector.sub(dragEnd, dragStart);
    force.mult(0.7);
    selectedMover.applyForce(force);
  }
  selectedMover = null;
  dragStart = null;
}
