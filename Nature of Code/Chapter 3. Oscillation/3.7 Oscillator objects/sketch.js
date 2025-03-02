let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    movers.push(new Oscillator());
  }
}

function draw() {
  background(0);
  for (mover of movers) {
    mover.update();
    mover.show();
  }
}