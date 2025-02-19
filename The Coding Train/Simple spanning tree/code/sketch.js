var vertices = [];

function setup() {
  createCanvas(windowWidth, windowHeight);  // Taille du canvas égale à la taille de la fenêtre
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);  // Redimensionne le canvas lorsque la fenêtre est redimensionnée
}

function mousePressed() {
  var v = createVector(mouseX, mouseY);
  vertices.push(v);
}

function draw() {
  background(51);
  
  var reached = [];
  // Fait une copie des vertices dans unreached
  var unreached = vertices.slice();
  
  // On commence a un vertex (le premier)
  reached.push(unreached[0]);  // On l'ajoute au reached
  // Le vertex est devenu reached donc on peut le delete de unreached
  unreached.splice(0, 1);  // Supprime 1 élem a partir de l'indice 0
  
  // On continue tant qu'il y a encore des vertices 
  while (unreached.length > 0) {
    var best = 10000;    // Initialise le best au premier vertex
    var reached_index;
    var unreached_index;
    // Pour chaque reached vertex on check tous les autres unreached
    for (let i = 0; i < reached.length; i++) {
      for (let j = 0; j < unreached.length; j++) {
        var v1 = reached[i];
        var v2 = unreached[j];
        var d = dist(v1.x, v1.y, v2.x, v2.y);
        if (d < best) {
          best = d;
          reached_index = i;
          unreached_index = j;
        }
      }
    }
    // Dessiner une ligne entre les 2 vertex avec distance best
    var best_reached = reached[reached_index];
    var best_unreached = unreached[unreached_index];
    stroke(255);
    strokeWeight(2);
    line(best_reached.x, best_reached.y, best_unreached.x, best_unreached.y);
    
    reached.push(unreached[unreached_index]);  // On ajoute le best au reached
    // Le vertex est devenu reached donc on peut le delete de unreached
    unreached.splice(unreached_index, 1);  // On supprime le best de unreached
  }
  
  // Dessiner les points
  for (let i = 0; i < vertices.length; i++) {
    fill(255);
    stroke(255);
    circle(vertices[i].x, vertices[i].y, 16);
  }
}
