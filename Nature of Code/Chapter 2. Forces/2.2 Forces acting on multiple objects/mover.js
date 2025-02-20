class Mover {
  constructor(x, y, mass, r) {
    this.mass = mass;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.r = r;
  }

  applyForce(force) {
    // On veut diviser par la masse F = m a
    // On utilise la méthode statique car on ne veut pas modifier directement la force
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);  // Mise à jour de la position de l'objet
    this.acceleration.mult(0);  // Réinitialisation de l'accélération à chaque frame
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(175);
    circle(this.position.x, this.position.y, this.r);
  }

  checkBorders() {
    if (this.position.x + this.r / 2 > width) {
      this.position.x = width - this.r / 2;
      this.velocity.x *= -1;
    } else if (this.position.x - this.r / 2 < 0) {
      this.velocity.x *= -1;
      this.position.x = 0 + this.r / 2;
    }
    if (this.position.y + this.r / 2 > height) {
      this.velocity.y *= -1;
      this.position.y = height - this.r / 2;
    }
  }
}
