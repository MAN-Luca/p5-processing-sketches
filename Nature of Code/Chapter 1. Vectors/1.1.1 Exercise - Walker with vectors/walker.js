class Walker {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.oldPos = createVector(this.pos.x, this.pos.y);
    this.time = createVector(0, 10000);
  }

  step() {
    this.pos.x += map(noise(this.time.x), 0, 1, -1, 1);
    this.pos.y += map(noise(this.time.y), 0, 1, -1, 1);

    this.time.x += 0.001;
    this.time.y += 0.001;
  }

  show() {
    stroke(255);
    strokeWeight(10);
    line(this.oldPos.x, this.oldPos.y, this.pos.x, this.pos.y);
    this.oldPos.x = this.pos.x;
    this.oldPos.y = this.pos.y;
  }

  checkBorders() {
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.oldPos.x = this.pos.x;
    }
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.oldPos.x = this.pos.x;
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.oldPos.y = this.pos.y;
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.oldPos.y = this.pos.y;
    }
  }
}
