function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  let mouse = createVector(mouseX, mouseY);
  let centerP = createVector(width / 2, height / 2);
  mouse.sub(centerP);
  // The magnitude (that is, length) of a vector can be accessed via the mag() method.  Here it is used as the width of a rectangle drawn at the top of the window.
  let m = mouse.mag();
  fill(0);
  rect(10, 10, m * 2, 20);
  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
}