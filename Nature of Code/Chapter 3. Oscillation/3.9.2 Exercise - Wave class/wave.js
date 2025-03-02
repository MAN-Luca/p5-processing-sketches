class Wave {
  constructor(x, y, w, amplitude, period) {
    this.origin = createVector(x, y); // Position d'origine
    this.w = w; // Largeur de l'onde
    this.amplitude = amplitude; // Amplitude de l'onde
    this.period = period; // Période (distance entre deux crêtes)

    this.theta = 0.0; // Angle initial
    this.xSpacing = 4; // Espacement entre les points
    this.dx = (TWO_PI / this.period) * this.xSpacing; // Incrémentation de l'angle pour chaque point
    this.yValues = new Array(floor(this.w / this.xSpacing)); // Tableau des valeurs Y
  }

  update() {
    this.theta += 0.02; // Fait avancer l'animation
    let x = this.theta; // Angle de départ
    
    // Mise à jour correcte du tableau `yValues`
    for (let i = 0; i < this.yValues.length; i++) {
      this.yValues[i] = sin(x) * this.amplitude; // Calcule Y avec sin(x)
      x += this.dx; // Incrémente l'angle pour le point suivant
    }
  }

  show() {
    for (let i = 0; i < this.yValues.length; i++) {
      stroke(0);
      fill(252, 186, 56, 200);
      circle(
        this.origin.x + i * this.xSpacing, // Position X
        this.origin.y + this.yValues[i], // Position Y corrigée
        20
      );
    }
  }
}
