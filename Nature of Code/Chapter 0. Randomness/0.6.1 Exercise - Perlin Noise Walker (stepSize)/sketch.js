let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker();
  background(0);
}

function draw() {
  walker.step();
  walker.checkBorders();
  walker.show();
}