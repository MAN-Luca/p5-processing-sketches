let repealDist = 80; // Distance à partir du bord pour appliquer la force

class Mover {
  constructor() {
    this.mass = random(1, 30);
    this.r = map(this.mass, 10, 50, 40, 200);

    this.position = createVector(
      random(repealDist + 5, width - (repealDist + 5)),
      random(repealDist + 5, height - (repealDist + 5))
    );
    
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity); // Mise à jour de la position de l'objet
    this.acceleration.mult(0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(175);
    circle(this.position.x, this.position.y, this.r);
  }

  checkBorders() {
    let repealMag = 1000; // Intensité de la force
    let repealForce = createVector(0, 0);

    let dWest = this.position.x - this.r;
    let dEast = width - (this.position.x + this.r);
    let dNorth = this.position.y - this.r;
    let dSouth = height - (this.position.y + this.r);

    // Bord gauche
    if (dWest < repealDist) {
      let force = repealMag / (dWest + 1); // +1 pour éviter division par 0
      repealForce.add(force, 0); // Repousse vers la droite
    }

    // Bord droit
    if (dEast < repealDist) {
      let force = -repealMag / (dEast + 1); // Force négative pour repousser vers la gauche
      repealForce.add(force, 0);
    }

    // Bord haut
    if (dNorth < repealDist) {
      let force = repealMag / (dNorth + 1); // Repousse vers le bas
      repealForce.add(0, force);
    }

    // Bord bas
    if (dSouth < repealDist) {
      let force = -repealMag / (dSouth + 1); // Repousse vers le haut
      repealForce.add(0, force);
    }

    // Appliquer la force de rappel
    this.applyForce(repealForce);
  }
}
