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

    this.dragCoeff = c;

    this.trail = [];
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

    this.trail.push(this.pos.copy());
  }

  show() {
    push();
    stroke(255);
    strokeWeight(3);
    fill(0);

    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    circle(0, 0, this.radius);
    line(0, 0, this.radius / 2, 0);
    pop();
  }

  showTrail() {
    for (let i = 0; i < this.trail.length - 1; i++) {
      stroke(0);
      strokeWeight(2);
      fill(255);
      noFill();
      line(
        this.trail[i].x,
        this.trail[i].y,
        this.trail[i + 1].x,
        this.trail[i + 1].y
      );
    }
  }
}
