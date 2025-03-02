class Spaceship {
  constructor() {
    // Regular motion stuff
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector();
    this.acceleration = createVector();

    // Freinage arbitraire du vaisseau
    this.brake = 0.995;
    this.maxSpeed = 6;

    // Variable pour la direction (heading);
    this.heading = 0;

    // Taille du vaisseau
    this.r = 25;

    // Variable pour colorer les boosters si on accélère
    this.isThrusting = false;
  }

  update() {
    this.velocity.add(this.acceleration); // Vitesse change avec acceleration
    this.velocity.mult(this.brake); // On freine un peu le vaisseau
    this.velocity.limit(this.maxSpeed); // Limite la vitesse
    this.position.add(this.velocity); // Change la position avec la vitesse

    this.acceleration.mult(0); // Reset l'acceleration pour pas aller trop vite
  }

  applyForce(force) {
    let f = force.copy();
    // f.div(mass); ON IGNORE LA MASSE ICI
    this.acceleration.add(f);
  }

  // Change l'angle d'attaque du vaisseau
  turn(angle) {
    this.heading += angle;
  }

  // Applique une force de poussée
  thrust() {
    // Offset de l'angle car le vaisseau est dessiné verticalement au début
    let angle = this.heading - PI / 2;
    let force = p5.Vector.fromAngle(angle);
    force.mult(0.1);
    this.applyForce(force);
    // Pour dessiner les boosters en action
    this.isThrusting = true;
  }

  wrapEdges() {
    let offset = this.r * 2;
    if (this.position.x > width + offset) {
      this.position.x = -offset;
    } else if (this.position.x < -offset) {
      this.position.x = width + offset;
    } else if (this.position.y > height + offset) {
      this.position.y = -offset;
    } else if (this.position.y < -offset) {
      this.position.y = height + offset;
    }
  }

  // Dessiner le vaisseau
  draw() {
    stroke(0);
    strokeWeight(2);
    // On wrap le code avec push et pop pour n'affecter que CE vaisseau
    push();

    translate(this.position.x, this.position.y + this.r);
    rotate(this.heading);
    fill(175);
    if (this.isThrusting) {
      fill(255, 0, 0);
    }
    rectMode(CENTER);
    rect(-this.r / 2, this.r, this.r / 3, this.r / 2);
    rect(this.r / 2, this.r, this.r / 3, this.r / 2);
    fill(175);
    // Fais le triangle du vaisseau
    beginShape();
    vertex(-this.r, this.r);
    vertex(0, - this.r);
    vertex(this.r, this.r);
    endShape();
    rectMode(CENTER);

    pop();
    
    this.isThrusting = false; // On remet a false le thrusting
  }
} 