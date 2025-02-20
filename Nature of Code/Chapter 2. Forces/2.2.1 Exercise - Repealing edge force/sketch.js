let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover();
  }
}

function draw() {
  background(0);

  for (let mover of movers) {
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
}
