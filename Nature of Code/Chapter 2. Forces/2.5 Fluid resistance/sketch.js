let movers = [];
let liquid;
let n = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < n; i++) {
    let mass = random(0.5, 5);
    movers[i] = new Mover(40 + i * 70, 0, mass);
  }
  liquid = new Liquid(0, height / 2, width, height, 0.1);
}

function draw() {
  background(0);

  liquid.show();

  for (let i = 0; i < movers.length; i++) {
    if (liquid.contains(movers[i])) {
      let dragForce = liquid.calculateDrag(movers[i]);
      movers[i].applyForce(dragForce);
    }

    let gravity = createVector(0, 0.1 * movers[i].mass);
    gravity.mult(movers[i].mass);
    movers[i].applyForce(gravity);

    movers[i].update();
    movers[i].show();
    movers[i].checkEdges();
  }
}

function mousePressed() {
  reset();
}

// Restart all the Mover objects randomly
function reset() {
  for (let i = 0; i < n; i++) {
    movers[i] = new Mover(40 + i * 70, 0, random(0.5, 3));
  }
}
