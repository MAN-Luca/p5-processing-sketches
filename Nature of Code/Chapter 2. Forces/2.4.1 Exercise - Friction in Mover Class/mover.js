class Mover {
  constructor(x, y, m, c) {
    this.mass = m;
    this.radius = m * 8;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.frictionCoeff = c;
    this.brakeCoeff = 1 - this.frictionCoeff;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  applyFriction() {
    if (this.contactEdge()) {
      let c = 0.1;
      let friction = this.velocity.copy();
      friction.mult(-1);
      friction.setMag(this.frictionCoeff);

      this.applyForce(friction);
    }
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.position.x, this.position.y, this.radius * 2);
  }

  contactEdge() {
    // L'objet touche le mur quand il est a 1 pixel de lui
    return this.position.y > height - this.radius - 1;
  }

  bounceEdges() {
    if (this.position.x > width - this.radius) {
      this.position.x = width - this.radius;
      this.velocity.x *= - this.brakeCoeff;
    } else if (this.position.x < this.radius) {
      this.position.x = this.radius;
      this.velocity.x *= - this.brakeCoeff;
    }
    if (this.position.y > height - this.radius) {
      this.position.y = height - this.radius;
      this.velocity.y *= - this.brakeCoeff;
    }
  }
}
