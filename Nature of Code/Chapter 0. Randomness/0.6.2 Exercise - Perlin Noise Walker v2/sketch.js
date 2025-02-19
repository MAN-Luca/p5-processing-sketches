let walker;

function setup() {
  createCanvas(windowWidth, windowHeight); // creating canvas of size 640 x 240
  walker = new Walker(); // creating an instance/object of class Walker
  background(0);
}

function draw() {
  for (let i = 0; i < 20; i++) {
    walker.step();
    walker.checkBorders();
    walker.show();
  }
}
