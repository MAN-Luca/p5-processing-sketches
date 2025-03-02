// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// An object for a draggable attractive body in our world

class Attractor {
  constructor(x, y, m) {
    this.position = createVector(x, y);
    this.mass = m;
  }

  attract(mover) {
    // Calculate direction of force
    let force = p5.Vector.sub(this.position, mover.position);
    // Distance between objects
    let distance = force.mag();
    // Limiting the distance to eliminate "extreme" results for very close or very far objects
    distance = constrain(distance, 5, 25);

    // Calculate gravitional force magnitude
    let strength = (this.mass * mover.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.setMag(strength);
    return force;
  }
}
