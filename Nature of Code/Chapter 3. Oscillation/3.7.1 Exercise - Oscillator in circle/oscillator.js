class Oscillator {
  constructor(index, total) {
    this.index = index;
    this.angle = (TWO_PI / total) * this.index; // Angle initial
    this.angleVelocity = 0.05; // Vitesse de l'oscillation
    this.amplitude = createVector(width / 3, height / 3); // Rayon de l'oscillation

    // Position de départ sur un cercle
    let angleOffset = (TWO_PI / total) * this.index;
    this.position = createVector(cos(angleOffset), sin(angleOffset));
  }

  update() {
    this.angle += this.angleVelocity;
  }

  show() {
    // Oscillation synchronisée
    let x = this.position.x * this.amplitude.x * sin(this.angle);
    let y = this.position.y * this.amplitude.y * sin(this.angle);

    push();
    translate(width / 2, height / 2);
    stroke(255);
    strokeWeight(2);
    line(0, 0, x, y); // Relier au centre
    fill(220);
    circle(x, y, 24); // Dessiner le point au bout
    pop();
  }
}
