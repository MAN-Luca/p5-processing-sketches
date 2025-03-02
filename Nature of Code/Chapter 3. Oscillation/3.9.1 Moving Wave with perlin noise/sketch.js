// Valeur initiale du bruit de Perlin
let xOffset = 0;

// Pas d'incrémentation du bruit pour chaque point
let deltaOffset = 0.05;

// Amplitude de l'oscillation
let amplitude = 200;

function setup() {
  // Crée un canevas qui prend toute la fenêtre
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Efface l'écran à chaque frame avec un fond blanc
  background(255);
  
  let noiseX = xOffset; // Variable pour stocker le bruit à chaque position X

  // Boucle pour dessiner les cercles le long de l'axe X
  for (let x = 0; x <= width; x += 15) { 
    // Calcule la position Y en utilisant le bruit de Perlin
    // - `noise(noiseX)` retourne une valeur entre 0 et 1
    // - `map()` transforme cette valeur dans l'intervalle [-amplitude, amplitude]
    // - `height / 2` permet de centrer la variation
    let y = height / 2 + map(noise(noiseX), 0, 1, -amplitude, amplitude);

    // Définit la couleur du contour
    stroke(0);
    // Définit la couleur de remplissage (gris semi-transparent)
    fill(127, 127);
    // Dessine un cercle à la position (x, y) avec un diamètre de 48 pixels
    circle(x, y, 48);

    // Incrémente le bruit pour la prochaine position X
    noiseX += deltaOffset;
  }

  // Fait évoluer le bruit dans le temps pour animer l'onde
  xOffset += deltaOffset / 2;
}
