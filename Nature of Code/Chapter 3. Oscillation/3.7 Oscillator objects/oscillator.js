class Oscillator {
  constructor() {
    this.angle = createVector();
    this.angleVelocity = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
    this.amplitude = createVector(
      random(20, width / 3),
      random(20, height / 3)
    );
  }

  update() {
    this.angle.add(this.angleVelocity);
  }

  show() {
    let x = this.amplitude.x * sin(this.angle.x);
    let y = this.amplitude.y * sin(this.angle.y);

    push();
    translate(width / 2, height / 2);
    stroke(255);
    fill(220);

    line(0, 0, x, y);
    circle(x, y, 32);
    pop();
  }
}
