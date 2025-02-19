class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0.1, 0);
    this.maxSpeed = 15;

    this.r = random(48, 96);
  }

  update() {
    if (keyIsDown(UP_ARROW)) {
      this.velocity.add(this.acceleration);
    } else if (keyIsDown(DOWN_ARROW)) {
      this.velocity.sub(this.acceleration);
    }

    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity); // Update la position de l'objet
  }

  show() {
    stroke(255);
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