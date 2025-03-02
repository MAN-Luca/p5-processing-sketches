let mover;
let longueur = 50;
let largeur = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mover = new Mover(longueur, largeur);
}

function draw() {
  background(23, 56, 115);

  mover.update();
  mover.checkEdges();
  mover.show();
}
