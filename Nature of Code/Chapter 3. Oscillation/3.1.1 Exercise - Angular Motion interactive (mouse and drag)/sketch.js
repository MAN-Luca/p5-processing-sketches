let angle = 0;
let angleVel = 0;
let angleAcc = 0;
let friction = 0.99;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  // On remet le 0;0 au centre de l'écran
  translate(width / 2, height / 2);

  // Acceleration en fcontion de la position x de la souris sur l'écran
  angleAcc = map(mouseX, 0, width, -0.001, 0.001);
  // Appliquer l'accélération et la vitesse angulaire
  angleVel += angleAcc;
  angleVel *= friction; // Appliquer la friction
  angle += angleVel;

  stroke(255);
  fill(255);
  strokeWeight(4);
  rectMode(CENTER);

  rotate(angle);
  line(-200, 0, 200, 0);
  ellipse(-200, 0, 50);
  ellipse(200, 0, 50);

  angleVel += angleAcc;
  angle += angleVel;
}
