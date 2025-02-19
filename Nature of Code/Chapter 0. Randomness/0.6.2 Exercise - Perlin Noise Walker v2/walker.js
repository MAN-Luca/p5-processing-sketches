class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.oldx = this.x;
    this.oldy = this.y;
    this.tx = 0;
    this.ty = 10000;
  }

  step() {
    this.x += map(noise(this.tx), 0, 1, -1, 1);
    this.y += map(noise(this.ty), 0, 1, -1, 1);

    this.tx += 0.001;
    this.ty += 0.001;
  }

  show() {
    stroke(255);
    strokeWeight(10);
    line(this.oldx, this.oldy, this.x, this.y);
    this.oldx = this.x;
    this.oldy = this.y;
  }

  checkBorders() {
    if (this.x < 0) {
      this.x = width;
      this.oldx = this.x;
    }
    if (this.x > width) {
      this.x = 0;
      this.oldx = this.x;
    }
    if (this.y < 0) {
      this.y = height;
      this.oldy = this.y;
    }
    if (this.y > height) {
      this.y = 0;
      this.oldy = this.y;
    }
  }
}
