function setup() {
  createCanvas(windowWidth, windowHeight);
  

  
}

function draw() {
  background(0);
  let mouse = createVector(mouseX, mouseY);
  let centerPoint = createVector(width / 2, height / 2);
  
  
  stroke(120);
  strokeWeight(4);
  line(0, 0, mouse.x, mouse.y);
  line(0, 0, centerPoint.x, centerPoint.y);
  
  
  mouse.sub(centerPoint);
  
  stroke(255);
  translate(width/2, height/2);
  line(0, 0, mouse.x, mouse.y);
}