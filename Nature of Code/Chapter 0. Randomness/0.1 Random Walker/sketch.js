
let walker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.checkBorders();
  walker.show();
}
