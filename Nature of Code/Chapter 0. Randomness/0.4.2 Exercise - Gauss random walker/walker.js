
class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    // Le dernier argument définit la transparence (alpha)
    stroke(0, 50);  // 50 est l'alpha, valeur de transparence
    strokeWeight(20);
    point(this.x, this.y);
  }

  step(stepsize) {
    // Yields –1, 0, or 1
    let xstep = floor(random(3)) - 1;
    let ystep = floor(random(3)) - 1;
    this.x += xstep * stepsize;
    this.y += ystep * stepsize;
  }

  checkBorders() {
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }
}
