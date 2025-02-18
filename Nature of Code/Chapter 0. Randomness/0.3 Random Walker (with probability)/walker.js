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

step() {
  let step = 20;
  let r1 = random(1);
  if (r1 < 0.5) {
    // Déplacement progressif vers la souris
    this.x += (mouseX - this.x) * 0.05;
    this.y += (mouseY - this.y) * 0.05;
  } else {
    // Déplacement aléatoire
    let xstep = floor(random(3)) - 1;
    let ystep = floor(random(3)) - 1;
    this.x += xstep * step;
    this.y += ystep * step;
  }
}


  checkBorders() {
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }
}
