class Body {
  constructor(x, y) {
    this.mass = 8;
    this.radius = this.mass * 4;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0); // On démarre avec une vitesse horizontale
    this.acceleration = createVector(0, 0);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  attract(other) {
    let G = 2;
    let force = p5.Vector.sub(this.position, other.position);
    let d = constrain(force.mag(), 5, 25);
    let strength = (G * (this.mass * other.mass) / (d * d))
    force.setMag(strength);
    other.applyForce(force);
  }

  show() {
    fill(255);
    circle(this.position.x, this.position.y, this.radius * 2);
  }
}
