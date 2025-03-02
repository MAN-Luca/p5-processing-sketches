class Oscillator {
  constructor(index, total) {
    this.index = index;
    this.angle = (TWO_PI / total) * this.index; // Angle initial
    this.angleVelocity = 0.05; // Vitesse initiale de l'oscillation
    this.angularAcceleration = random(-0.001, 0.001); //  Accélération angulaire aléatoire
    this.amplitude = createVector(width / 3, height / 3);

    // Position de départ sur un cercle
    let angleOffset = (TWO_PI / total) * this.index;
    this.position = createVector(cos(angleOffset), sin(angleOffset));
  }

  update() {
    this.angleVelocity += this.angularAcceleration; //  Appliquer l'accélération
    this.angle += this.angleVelocity; //  Mettre à jour l'angle

    // Ajouter une légère limite à l'angleVelocity pour éviter qu'il ne devienne trop grand
    this.angleVelocity = constrain(this.angleVelocity, -0.1, 0.1);
  }

  show() {
    // Oscillation synchronisée
    let x = this.position.x * this.amplitude.x * sin(this.angle);
    let y = this.position.y * this.amplitude.y * sin(this.angle);

    push();
    translate(width / 2, height / 2);
    stroke(255);
    strokeWeight(2);
    line(0, 0, x, y);
    fill(220);
    circle(x, y, 24);
    pop();
  }
}