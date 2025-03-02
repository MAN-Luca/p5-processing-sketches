let period = 120; // Période d'oscillation
let amplitude; // Amplitude de l'oscillation
let y; // Position verticale du poids

function setup() {
  createCanvas(windowWidth, windowHeight);
  amplitude = height / 4; // L’amplitude dépend de la hauteur de la fenêtre
}

function draw() {
  background(255);

  let time = frameCount % period; // Temps qui boucle avec la période
  let sinValue = sin(TWO_PI * time / period); // Valeur sinusoïdale

  // Utilisation de map() pour convertir le sinusoïde en position verticale
  y = map(sinValue, -1, 1, height / 4, height - height / 4);

  translate(width / 2, 0); // Déplacer le point de référence au centre en haut

  // Dessiner le ressort
  stroke(0);
  strokeWeight(2);
  line(0, 0, 0, y - 24);

  // Dessiner le poids suspendu
  fill(127);
  circle(0, y, 48);
}
