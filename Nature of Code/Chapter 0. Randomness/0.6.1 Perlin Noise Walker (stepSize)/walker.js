class Walker {
  constructor() {
    // Noise renvoie les memes valeurs pour un meme temps, donc il faut que tx et ty soient différents sinon ils auront les memes valeurs
    this.tx = 0;
    this.ty = 100;
    this.x = width / 2;
    this.y = height / 2;
  }

  step() {
    // map(valeur, min, max, minMap, maxMap)
    // Noise renvoie une valeur entre 0 et 1 qu'on traduit entre 0 et width/height
    let stepSizeX = map(noise(this.tx), 0, 1, 0, width);
    let stepSizeY = map(noise(this.ty), 0, 1, 0, height);
    
    this.x += stepSizeX * 0.1;
    this.y += stepSizeY * 0.1;

    this.tx += 0.01;
    this.ty += 0.01;
  }

  show() {
    strokeWeight(1);
    fill(255, 50);
    stroke(0);
    circle(this.x, this.y, 48);
  }

  checkBorders() {
    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }
}
