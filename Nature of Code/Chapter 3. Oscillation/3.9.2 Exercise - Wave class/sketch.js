let wave1;
let wave2;
let wave3;

let waves = [];
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Chaque onde occupe toute la largeur de la fenêtre
  waves.push(new Wave(0, height / 3 - height / 9, width, 20, 300));
  waves.push(new Wave(0, height / 3 + height / 9, width, 40, 180));
  waves.push(new Wave(0, (2 * height) / 3 + height / 9, width, 150, 300));
}

function draw() {
  background(28, 46, 64);

  for (let w of waves) {
    w.update();
    w.show();
  }
}
