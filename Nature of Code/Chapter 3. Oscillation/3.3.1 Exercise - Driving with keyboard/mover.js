class Mover {
  constructor(long, larg) {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.h = long;
    this.w = larg;

    this.maxSpeed = 10;
    this.mass = 1;
    
    this.angle = 0; // Angle initial
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);

    this.acc.mult(0); // Réinitialiser l'accélération après chaque mise à jour
  }

  show() {
    push();
    stroke(0);
    fill(255);
    rectMode(CENTER);

    translate(this.pos.x, this.pos.y);
    rotate(this.angle); // Utilisation de l'angle directement
    rect(0, 0, this.h, this.w);

    pop();
  }

  checkEdges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
    } else if (this.pos.x < 0) {
      this.pos.x = width;
    }

    if (this.pos.y > height) {
      this.pos.y = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }
}