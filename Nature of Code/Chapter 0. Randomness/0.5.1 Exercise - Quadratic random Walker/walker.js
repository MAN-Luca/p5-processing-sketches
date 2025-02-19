class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0, 50);
    strokeWeight(20);
    point(this.x, this.y);
  }

  step(stepsize) {
    // Calcul des déplacements x et y
    let xstep = randomGaussian() * stepsize;  // Utilisation de randomGaussian pour la direction
    let ystep = randomGaussian() * stepsize;  // Direction aléatoire mais avec une probabilité quadratique
    this.x += xstep;
    this.y += ystep;
  }

  checkBorders() {
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }
}

// Fonction accept-reject avec une distribution quadratique
function acceptRejectQuadratic(maxValue) {
  while (true) {
    let r1 = random(maxValue);  // Valeur aléatoire dans la plage [0, maxValue]
    let probability = r1 * r1 / (maxValue * maxValue);  // Probabilité quadratique

    let r2 = random(1);  // Deuxième valeur aléatoire pour l'acceptation/rejet

    if (r2 < probability) {
      return r1;  // Si la deuxième valeur est inférieure à la probabilité, accepter r1
    }
  }
}