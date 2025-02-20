class Mover {
  constructor() {
    this.position = createVector(width / 2 - width / 8, height / 2 - height / 8);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.maxSpeed = 15;
    this.time = createVector(0, 10000);
    this.wind = createVector(0, 0);
    this.r = 80;
    this.friction = 0.99;  // Facteur de friction pour ralentir la vitesse X
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    let lift = createVector(0, -0.1);
    this.applyForce(lift);

    // Appliquer la force du vent si la souris est pressée
    if (mouseIsPressed) {
      let windAcc = map(noise(this.time.x), 0, 1, -0.2, 0.2);
      this.wind = createVector(windAcc, 0);
    } else {
      // Si la souris est relâchée, appliquer la friction à la vitesse en X
      this.wind.mult(0.9);
      this.velocity.x *= this.friction;  // Diminue progressivement la vitesse X
    }

    this.applyForce(this.wind);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);  // Mise à jour de la position de l'objet
    this.velocity.limit(this.maxSpeed);

    this.acceleration.mult(0);  // Réinitialisation de l'accélération à chaque frame
    this.time.add(0.01, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(175);

    circle(this.position.x, this.position.y, this.r);
  }

  checkBorders() {
    // Wrap over 
    if (this.position.x - this.r / 2 > width) {
      this.position.x = 0;
    } else if (this.position.x + this.r < 0) {
      this.position.x = width;
    }
    // Rebond axe y
    if (this.position.y - this.r / 2 < 0) {
      this.position.y = 0 + this.r / 2;
      this.velocity.y *= -1;
    }
  }
}
