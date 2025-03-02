class Mover {
  constructor(x, y, m) {
    this.mass = m;
    this.radius = this.mass * 8;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0); // On démarre avec une vitesse horizontale
    this.acceleration = createVector(0, 0);
    this.maxSpeed = 15;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }


  show() {
    fill(255);
    circle(this.position.x, this.position.y, this.radius * 2);
  }
}
