let movers = [];
let liquid;
let n = 15;

// Le problème vient du fait que, lorsque le coefficient de traînée est élevé, la force de traînée appliquée peut être si forte qu'elle inverse la vitesse du Mover, ce qui est physiquement incorrect (la traînée devrait seulement ralentir un objet, pas inverser sa direction).

// Pour résoudre cela, tu peux utiliser la méthode limit()  pour limiter la magnitude de la force de traînée. L'idée est de s'assurer que la force de traînée ne dépasse pas la force nécessaire pour stopper l'objet en un seul frame. 
// > Méthode calculateDrag dans liquid
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < n; i++) {
    let mass = random(0.1, 2);
    movers[i] = new Mover(40 + i * 70, 0, mass, 100);
  }
  liquid = new Liquid(0, height / 2, width, height, 1000);
}

function draw() {
  background(0);

  liquid.show();

  for (let i = 0; i < movers.length; i++) {
    if (liquid.contains(movers[i])) {
      let dragForce = liquid.calculateDrag(movers[i]);
      movers[i].applyForce(dragForce);
    }

    let gravity = createVector(0, 0.1 * movers[i].mass);
    gravity.mult(movers[i].mass);
    movers[i].applyForce(gravity);

    movers[i].update();
    movers[i].show();
    movers[i].checkEdges();
  }
}

function mousePressed() {
  reset();
}

// Restart all the Mover objects randomly
function reset() {
  for (let i = 0; i < n; i++) {
    movers[i] = new Mover(40 + i * 70, 0, random(0.5, 3));
  }
}
