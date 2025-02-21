let moverA;
let moverB;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // A large Mover on the left side of the window
  moverA = new Mover(width / 4, 400, 10);
  // A smaller Mover on the right side of the window
  moverB = new Mover(width - width / 4, 400, 2);
}

function draw() {
  background(0);

  let gravity = createVector(0, 0.1);

  // On multiplie la force de gravité par la masse
  let gravityA = p5.Vector.mult(gravity, moverA.mass);
  moverA.applyForce(gravityA);
  let gravityB = p5.Vector.mult(gravity, moverB.mass);
  moverB.applyForce(gravityB);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }

  moverA.update();
  moverA.display();
  moverA.checkEdges();

  moverB.update();
  moverB.display();
  moverB.checkEdges();
}