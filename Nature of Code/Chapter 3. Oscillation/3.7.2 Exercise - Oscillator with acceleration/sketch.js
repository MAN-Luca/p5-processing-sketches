let movers = [];
let total = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < total; i++) {
    movers.push(new Oscillator(i, total));
  }
}

function draw() {
  background(0);
  for (let mover of movers) {
    mover.update();
    mover.show();
  }
}