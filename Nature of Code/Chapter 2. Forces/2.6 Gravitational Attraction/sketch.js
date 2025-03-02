let movers = [];
let attractor;

let G = 1.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 5; i++) {
    movers.push(new Mover(random(0, width), random(0, height), random(5, 15)));
  }
  attractor = new Attractor();
}

function draw() {
  background(255);
  for (let mover of movers) {
    let force = attractor.attract(mover);
    mover.applyForce(force);

    mover.update();
    attractor.show();
    mover.show();
  }
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}
