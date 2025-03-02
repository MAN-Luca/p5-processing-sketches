class Mover {
  constructor(x, y, mass, c) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.mass = mass;
    this.radius = this.mass;

    this.angle = 0;
    this.angleVel = 0;
    this.angleAcc = 0;
    
    this.dragCoeff = c
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    this.angleAcc = this.vel.y / 100;
    this.angleVel += this.angleAcc;
    this.angleVel = constrain(this.angleVel, -0.5, 0.5);
    this.angle += this.angleVel;

    this.acc.mult(0);
  }

  show() {
    push();
    stroke(255);
    strokeWeight(3);
    fill(0);

    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    circle(0, 0, this.radius * 2);
    line(0, 0, this.radius, 0);
    pop();
  }
}
