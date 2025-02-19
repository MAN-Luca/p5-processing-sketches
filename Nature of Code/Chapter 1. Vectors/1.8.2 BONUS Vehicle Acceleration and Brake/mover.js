class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0); // Accélération dynamique
    this.maxSpeed = 10;

    this.r = random(48, 96);
  }

  update() {
    this.acceleration.set(0, 0); // Réinitialiser l'accélération à chaque frame

    // Gérer les entrées clavier pour chaque direction
    if (keyIsDown(RIGHT_ARROW)) {
      this.acceleration.x = 0.5;
    } 
    if (keyIsDown(LEFT_ARROW)) {
      this.acceleration.x = -0.5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.acceleration.y = 0.5;
    } 
    if (keyIsDown(UP_ARROW)) {
      this.acceleration.y = -0.5;
    }

    // Appliquer l'accélération et la vitesse
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
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
