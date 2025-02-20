let mover;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mover = new Mover();
}

function draw() {
  background(0);
  
  let gravity = createVector(0, 0.5);
  mover.applyForce(gravity);
  
  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }
  
  mover.update();
  mover.checkBorders();
  mover.show();
  
}