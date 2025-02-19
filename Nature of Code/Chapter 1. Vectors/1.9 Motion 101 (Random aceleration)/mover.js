class Mover {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector();
    this.acceleration = createVector();
    this.maxSpeed = 10;
    
    this.r = random(48, 96);
  }

  update() {
    this.acceleration = p5.Vector.random2D(); // Direction random (magnitude 1)
    this.acceleration.mult(random(2));
    
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity); // Update la position de l'objet
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(175);

    circle(this.position.x, this.position.y, this.r);
  }

  checkBorders() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }
}
