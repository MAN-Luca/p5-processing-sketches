function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  let mouse = createVector(mouseX, mouseY);
  let centerP = createVector(width / 2, height / 2);
  mouse.sub(centerP);

  translate(width / 2, height / 2);
  stroke(200);
  line(0, 0, mouse.x, mouse.y);
  // In this example, after the vector is normalized, it’s multiplied by 50. Note that no matter where the mouse is, the vector always has the same length (50) because of the normalization process.
  mouse.normalize();
  mouse.mult(50);
  stroke(0);
  strokeWeight(8);
  line(0, 0, mouse.x, mouse.y);
}