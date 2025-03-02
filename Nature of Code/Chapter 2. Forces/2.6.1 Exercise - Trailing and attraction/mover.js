class Mover {
  constructor(x, y, m) {
    this.mass = m;
    this.radius = this.mass * 8;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0); // On démarre avec une vitesse horizontale
    this.acceleration = createVector(0, 0);
    this.trail = [];
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

    this.trail.push(this.position.copy());
    if (this.trail.length > 100) {
      this.trail.shift();
    }
  }

  show() {
    noFill();
    stroke(0, 150);
    beginShape();
    for (let pos of this.trail) {
      vertex(pos.x, pos.y);
    }
    endShape();
    
    fill(255);
    circle(this.position.x, this.position.y, this.radius * 2);
  }
}
