let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  movers[0] = new Mover(100, 100, 10, 100);
  movers[1] = new Mover(200, 400, 1, 40);
  movers[2] = new Mover(100, height / 2, 5, 64);
}

function draw() {
  background(0);

  for (let mover of movers) {
    let gravity = createVector(0, 0.5);
    mover.applyForce(gravity);

    if (mouseIsPressed) {
      let mouse = createVector(mouseX, mouseY);
      let pos = createVector(mover.position.x, mover.position.y);
      // Le vent pointe de la souris aux objets
      let wind = p5.Vector.sub(pos, mouse);
      // Vent dynamique en fonction de la distance
      let d = wind.mag();
      wind.setMag(map(d, 0, width, 1, 0.15));
      
      mover.applyForce(wind);
    }

    mover.update();
    mover.checkBorders();
    mover.show();
  }
}
