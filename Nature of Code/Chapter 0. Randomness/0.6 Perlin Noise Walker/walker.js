class Walker {
  constructor() {
    this.tx = 0;
    this.ty = 10000;
  }
  
  step() {
    // map(valeur, min, max, minMap, maxMap)
    // Noise renvoie une valeur entre 0 et 1 qu'on traduit entre 0 et width/height
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    
    this.tx += 0.01;
    this.ty += 0.01;
  }
  
  show() {
    strokeWeight(1);
    fill(255);
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