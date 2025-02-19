let walker;
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker();
  background(255);

  // Slider pour ajuster l'écart type (sd)
  slider = createSlider(1, 50, 5);
  slider.position(10, height - 40);
}

function draw() {
  let sd = slider.value(); // Écart type contrôlé par le slider

  // Génération du pas avec une distribution accept-reject
  let stepSize = acceptRejectQuadratic(sd);

  walker.step(stepSize);
  walker.checkBorders();
  walker.show();
}