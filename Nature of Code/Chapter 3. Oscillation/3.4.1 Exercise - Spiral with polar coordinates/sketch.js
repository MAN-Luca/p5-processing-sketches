let r;
let theta;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  r = 0;
  theta = 0;
}

function draw() {
  fill(127);
  stroke(0);
  translate(width / 2, height / 2); // remet le 0;0 au centre de l'image

  let pos = p5.Vector.fromAngle(theta); // Crée un vecteur unitaire en direction de l'angle
  pos.mult(r);

  // line(0, 0, pos.x, pos.y);
  circle(pos.x, pos.y, 12);

  r += 0.1;
  theta += 0.02;
}
