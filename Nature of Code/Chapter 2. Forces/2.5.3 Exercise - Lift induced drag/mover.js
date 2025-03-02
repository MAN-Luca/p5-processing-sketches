class Mover {
  constructor(x, y, m) {
    this.mass = m;
    this.len = m * 15;
    this.h = this.len / 2;
    this.position = createVector(x, y);
    this.velocity = createVector(1, 0); // On démarre avec une vitesse horizontale
    this.acceleration = createVector(0, 0);
    this.maxSpeed = 15;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.acceleration.x += 0.1;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.acceleration.x -= 0.1;
    }

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  applyLift(liftCoeff) {
    let speed = this.velocity.mag();
    let liftMagnitude = liftCoeff * speed * speed;

    // Créer un vecteur perpendiculaire à la vitesse
    let lift = createVector(-this.velocity.y, this.velocity.x);
    lift.setMag(liftMagnitude);

    this.applyForce(lift);
  }

  checkEdges() {
    if (this.position.y > height - this.h) {
      this.position.y = height - this.h;
      this.velocity.y *= -0.7; // Rebond léger
    }
    if (this.position.y < 0) {
      this.position.y = 0;
      this.velocity.y *= -0.7;
    }
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }
  }

  show() {
    fill(255);
    stroke(0);
    push();
    translate(this.position.x, this.position.y);
    rotate(this.velocity.heading()); // Faire pivoter l'avion selon sa direction
    rect(0, 0, this.len, this.h);
    pop();
  }
}