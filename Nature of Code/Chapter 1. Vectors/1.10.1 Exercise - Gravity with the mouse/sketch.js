let mover;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mover = new Mover();
}

function draw() {
  background(0);
  mover.update();
  mover.checkBorders();
  mover.show();
  
}