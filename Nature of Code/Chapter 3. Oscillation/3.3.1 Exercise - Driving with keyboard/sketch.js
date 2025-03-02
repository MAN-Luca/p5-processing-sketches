let mover;
let longueur = 50;
let largeur = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mover = new Mover(longueur, largeur);
}

function draw() {
  background(23, 56, 115);

  // Appliquer la friction
  let friction = mover.vel.copy();
  friction.setMag(0.03);
  friction.mult(-1);

  mover.applyForce(friction);
  mover.update();
  mover.checkEdges();
  mover.show();
  
  keyPressed();
}

function keyPressed() {
  let force;
  if (keyCode === UP_ARROW) {
    // Déplacer dans la direction actuelle (avant)
    force = createVector(cos(mover.angle), sin(mover.angle));
    force.mult(0.3); // Force dans la direction de l'angle
    mover.applyForce(force);
  } else if (keyCode === DOWN_ARROW) {
    // Déplacer dans la direction opposée (reculer)
    force = createVector(cos(mover.angle), sin(mover.angle));
    force.mult(-0.1); // Force dans la direction opposée de l'angle
    mover.applyForce(force);
  } else if (keyCode === LEFT_ARROW) {
    // Tourner vers la gauche (rotation anti-horaire)
    mover.angle -= 0.05; // Change l'angle (tourner vers la gauche)
  } else if (keyCode === RIGHT_ARROW) {
    // Tourner vers la droite (rotation horaire)
    mover.angle += 0.05; // Change l'angle (tourner vers la droite)
  }
}
