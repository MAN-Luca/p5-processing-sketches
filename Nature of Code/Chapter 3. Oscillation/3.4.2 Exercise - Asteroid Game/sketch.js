let ship;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Spaceship();
}

function draw() {
  background(255);

  ship.update();
  ship.wrapEdges();
  ship.draw();

  if (keyIsDown(LEFT_ARROW)) {
    ship.turn(-0.03);
  } else if (keyIsDown(RIGHT_ARROW)) {
    ship.turn(0.03);
  } else if (keyIsDown(90)) {
    // Code pour Z
    ship.thrust();
  }
}
