let r;
let theta;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  r = height * 0.3;
  theta = 0;
  
}

function draw() {
  background(255);
  
  translate(width / 2, height / 2); // remet le 0;0 au centre de l'image
  
  let x = r * cos(theta);
  let y = r * sin(theta);
  
  fill(127);
  stroke(0);
  line(0, 0, x, y);
  circle(x, y, 48);
  
  theta += 0.05;
  
  
}
