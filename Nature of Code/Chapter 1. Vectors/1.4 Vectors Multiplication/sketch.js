function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  let mouse = createVector(mouseX, mouseY);
  let centerPoint = createVector(width/2, height/2);
  mouse.sub(centerPoint);
  
  translate(width/2, height/2);
  stroke(120);
  strokeWeight(4);
  
  line(0, 0, mouse.x, mouse.y);
  
  mouse.mult(0.5);
  
  stroke(255);
  line(0, 0, mouse.x, mouse.y);
  
  
  
}