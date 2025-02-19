let slider;

function setup() {
  createCanvas(800, 800);
  background(0);

  // Slider pour ajuster l'écart type (standard deviation : sd)
  // min: 10, max: 150, valeur initiale: 60, pas: 1
  slider = createSlider(10, 150, 60, 1); 
  slider.position(10, height + 10);
}

function draw() {
  
  let meanX = width / 2;
  let meanY = height / 2;
  let sd = slider.value();  // On récupère l'écart-type depuis le slider
  
  let x = randomGaussian(meanX, sd);
  let y = randomGaussian(meanY, sd);
  
  // Génération des couleurs
  let r = constrain(randomGaussian(150, 50), 0, 255);
  let g = constrain(randomGaussian(100, 50), 0, 255);
  let b = constrain(randomGaussian(200, 50), 0, 255);
  
  noStroke();
  fill(r, g, b, 100);
  circle(x, y, 16);
  
}