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
    // F_d = - D_coeff * v² = - c * speed²
    let speed = mover.velocity.mag();
    let dragMagnitude = this.dragCoeff * (speed * speed);

    let dragForce = mover.velocity.copy();
    dragForce.mult(-1);

    dragForce.setMag(dragMagnitude);

    // Limite la force de traînée pour ne pas inverser la direction
    let maxDrag = mover.velocity.copy();
    // deltaTime est une variable globale dans p5.js qui donne le temps écoulé (en     millisecondes) depuis le dernier frame. Elle est utile pour adapter les forces     ou les vitesses en fonction du framerate.
    maxDrag.mult(mover.mass / deltaTime);
    dragForce.limit(maxDrag.mag());

    return dragForce;
  }

  show() {
    noStroke();
    fill(58, 146, 194);
    rect(this.x, this.y, this.w, this.h);
  }
}
