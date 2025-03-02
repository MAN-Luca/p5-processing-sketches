class Attractor {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.mass = 50;
    this.G = 1;
  }

  attract(mover) {
    // Calculate direction of force
    let force = p5.Vector.sub(this.pos, mover.pos);
    // Distance between objects
    let distance = force.mag();
    // Limiting the distance to eliminate "extreme" results for very close or very far objects
    distance = constrain(distance, 5, 25);

    // Calculate gravitional force magnitude
    let strength = (this.G * this.mass * mover.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.setMag(strength);
    return force;
  }

  // Method to display
  display() {
    ellipseMode(CENTER);
    stroke(252, 186, 3);
    fill(252, 186, 3);
    ellipse(this.pos.x, this.pos.y, this.mass * 2);
  }
}