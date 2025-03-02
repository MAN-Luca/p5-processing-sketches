class Liquid {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.dragCoeff = c;
  }

  contains(mover) {
    // Return true si le mover object est dans le liquide (plus bas que la surface)
    let pos = mover.position;
    return (
      pos.x > this.x &&
      pos.x < this.x + this.w &&
      pos.y > this.y &&
      pos.y < this.y + this.h
    );
  }
  
  calculateDrag(mover) {
    
    // F_d = - Aire * D_coeff * v² = - A * c * speed²
    // On rajoute la surface en contact (ici juste la longueur des rectangles)
    let speed = mover.velocity.mag();
    let dragMagnitude = (mover.len * 0.01) * this.dragCoeff * (speed * speed) * mover.mass;
    
    let dragForce = mover.velocity.copy();
    dragForce.mult(-1);
    
    dragForce.setMag(dragMagnitude);
    
    return dragForce;
  }

  show() {
    noStroke();
    fill(58, 146, 194);
    rect(this.x, this.y, this.w, this.h);
  }
}
