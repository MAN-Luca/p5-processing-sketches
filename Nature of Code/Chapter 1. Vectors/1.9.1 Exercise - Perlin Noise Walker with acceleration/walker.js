class Walker {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.time = createVector(0, 10000);
    this.maxSpeed = 5;
  }
  
  update() {
    // map(valeur, min, max, minMap, maxMap)
    // Noise renvoie une valeur entre 0 et 1 qu'on traduit entre 0 et width/height
    let accX = map(noise(this.time.x), 0, 1, -0.5, 0.5);
    let accY = map(noise(this.time.y), 0, 1, -0.5, 0.5);
    this.acceleration.set(accX, accY);
    
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    
    this.time.add(0.01, 0.01);
  }
  
  
  
  show() {
    strokeWeight(1);
    fill(255);
    stroke(0);
    circle(this.position.x, this.position.y, 48);
  }
  
  checkBorders() {
    if (this.position.x < 0) this.position.x = width;
    if (this.position.x > width) this.position.x = 0;
    if (this.position.y < 0) this.position.y = height;
    if (this.position.y > height) this.position.y = 0;
  }
}