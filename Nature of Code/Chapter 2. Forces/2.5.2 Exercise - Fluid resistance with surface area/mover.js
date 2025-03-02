class Mover {
  constructor(x, y, m, c) {
    this.mass = m;
    this.len = m * 15;
    this.h = this.len/2;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.frictionCoeff = c;
    this.brakeCoeff = 1 - this.frictionCoeff;
  }

  // Newton's 2nd law: F = M * A
  // or A = F / M
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }


  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(255);
    rect(this.position.x, this.position.y, this.len, this.h);
  }

  contactEdge() {
    // L'objet touche le mur quand il est a 1 pixel de lui
    return this.position.y > height + this.h - 1;
  }

  // Bounce off bottom of window
  checkEdges() {
    if (this.position.y > height - this.h) {
      this.velocity.y *= -0.9; // A little dampening when hitting the bottom
      this.position.y = height - this.h;
    }
  }
}
