let movers = [];
let gravity;
let cannonAngle;
let ejectionSpeed = 100;

// Sliders
let speedSlider, gravitySlider, dragSlider, massSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Création des sliders en haut à gauche
  speedSlider = createSlider(50, 300, ejectionSpeed);
  speedSlider.position(20, 20);

  gravitySlider = createSlider(0, 2, 0.5, 0.1);
  gravitySlider.position(20, 50);

  dragSlider = createSlider(0, 0.05, 0.01, 0.001);
  dragSlider.position(20, 80);

  massSlider = createSlider(5, 50, 15, 1);
  massSlider.position(20, 110);

  gravity = createVector(0, gravitySlider.value());
}

function draw() {
  background(153, 241, 255);

  // Mettre à jour les valeurs des sliders
  ejectionSpeed = speedSlider.value();
  gravity.set(0, gravitySlider.value());

  let dx = mouseX - 50;
  let dy = mouseY - (height - 50);
  cannonAngle = constrain(atan2(dy, dx), -PI / 2, 0);
  drawCannon();

  for (let i = movers.length - 1; i >= 0; i--) {
    let dragForce = calculateDrag(movers[i]);
    movers[i].applyForce(dragForce);

    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].show();

    if (!checkBorders(movers[i])) {
      movers.splice(i, 1);
    }
  }

  // Affichage des valeurs des sliders
  fill(0);
  textSize(14);
  text(`Vitesse de tir: ${ejectionSpeed}`, 160, 35);
  text(`Gravité: ${gravity.y}`, 160, 65);
  text(`Frottement: ${dragSlider.value()}`, 160, 95);
  text(`Masse: ${massSlider.value()}`, 160, 125);
}

// Désactiver le tir lors du changement des sliders
function mousePressed() {
  // Vérifie que l'événement n'est pas lié aux sliders
  if (mouseX < 20 || mouseX > 120 || mouseY < 20 || mouseY > 140) {
    let p = new Mover(50, height - 40, massSlider.value(), dragSlider.value());
    let force = createVector(
      ejectionSpeed * cos(cannonAngle),
      ejectionSpeed * sin(cannonAngle)
    );
    p.applyForce(force);
    movers.push(p);
  }
}

// Dessine un canon statique en bas à gauche
function drawCannon() {
  push();
  fill(150);
  rectMode(CENTER);
  translate(50, height - 50);
  rotate(cannonAngle);
  rect(0, 0, 80, 30);
  pop();
}

function calculateDrag(mover) {
  let speed = mover.vel.mag();
  let dragMagnitude = mover.dragCoeff * (speed * speed);

  let dragForce = mover.vel.copy();
  dragForce.mult(-1);

  dragForce.setMag(dragMagnitude);

  return dragForce;
}

function checkBorders(mover) {
  return (
    mover.pos.x > 0 - mover.radius &&
    mover.pos.x < width + mover.radius &&
    mover.pos.y > 0 - mover.radius &&
    mover.pos.y < height + mover.radius
  );
}