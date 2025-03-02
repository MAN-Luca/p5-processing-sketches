class Mover {
  constructor(long, larg) {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = 0;

    this.h = long;
    this.w = larg;
    
    this.maxSpeed = 6;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  update() {
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.pos);
    dir.normalize();
    dir.mult(0.5);
    this.acc = dir;

    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
  }

  show() {
    // On dessine un rectangle qui pointe dans la direction de la vitesse
    // V = Vx et Vy --> hyôthénuse = arctan(opposé / adjacent)
    // On utilise atan2 qui résout le probleme de la direction (positif et négatifs = same)

    let angle = this.vel.heading();
    // heading = Pareil que : let angle = atan2(this.vel.y / this.vel.x);

    push();

    stroke(0);
    fill(255);
    rectMode(CENTER);
    
    translate(this.pos.x, this.pos.y);
    rotate(angle);
    rect(0, 0, this.h, this.w);

    pop();
  }
  
  checkEdges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
    } else if (this.pos.x < 0) {
      this.pos.x = width;
    }

    if (this.pos.y > height) {
      this.pos.y = 0;
    } else if (this.pos.y < 0) {
      this.pos.y = height;
    }
  }
}
