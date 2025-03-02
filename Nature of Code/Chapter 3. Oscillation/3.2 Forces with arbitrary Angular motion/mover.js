class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.acc = createVector();
    this.mass = mass;
    this.radius = this.mass * 8;

    this.angle = 0;
    this.angleVel = 0;
    this.angleAcc = 0.01;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.angleAcc = this.acc.x / 10.0; // On dit que l'acc angulaire est égale à l'acc linéaire en x
    this.angleVel += this.angleAcc;
    this.angleVel = constrain(this.angleVel, -0.5, 0.5); // On contraint la vitesse pour ne pas avoir une vitesse de rotation trop élévée
    this.angle += this.angleVel;

    this.acc.mult(0);
  }

  show() {
    stroke(10);
    strokeWeight(3);
    fill(135, 244, 250);

    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    circle(0, 0, this.radius * 2);
    line(0, 0, this.radius, 0);
    pop();
  }
}
