// Angle de départ pour la sinusoïde
let startAngle = 0;

// Pas d'incrémentation de l'angle pour chaque point
let deltaAngle = 0.2;

// Amplitude de l'oscillation (hauteur de la vague)
let amplitude = 200;

function setup() {
  // Crée un canevas qui prend toute la fenêtre
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Efface l'écran à chaque frame avec un fond blanc
  background(255);
  
  let angle = startAngle; // On initialise l'angle pour cette frame
  
  // Boucle pour dessiner les cercles le long de l'axe X
  for (let x = 0; x <= width; x += 15) { 
    // Calcule la position Y en fonction de la sinusoïde
    // - `sin(angle)` oscille entre -1 et 1
    // - `map()` remappe cette valeur dans l'intervalle [-amplitude, amplitude]
    // - `height / 2` permet de centrer la sinusoïde verticalement
    let y = height / 2 + map(sin(angle), -1, 1, -amplitude, amplitude);

    // Définit la couleur du contour
    stroke(0);
    // Définit la couleur de remplissage (gris semi-transparent)
    fill(127, 127);
    // Dessine un cercle à la position (x, y) avec un diamètre de 48 pixels
    circle(x, y, 48);

    // Incrémente l'angle pour le prochain point
    angle += deltaAngle;
  }

  // Fait avancer la vague progressivement dans le temps
  startAngle += deltaAngle / 10;
}
