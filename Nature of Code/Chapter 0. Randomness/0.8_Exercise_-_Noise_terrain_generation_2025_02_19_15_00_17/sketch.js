// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Landscape with height values according to Perlin noise

let land;
let theta = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // Create a landscape object
  land = new Terrain(20, 800, 400);
}

function draw() {
  land.calculate();
  background(255);
  push();
  translate(0, 20, -200);
  rotateX(PI / 3);
  rotateZ(theta);
  land.render();
  pop();

  theta += 0.0025;
}
