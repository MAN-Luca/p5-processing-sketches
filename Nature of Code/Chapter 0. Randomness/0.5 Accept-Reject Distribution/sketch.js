
let randomCounts = [];
let total = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Initialiser la liste avec des 0
  for (let i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(255);
  // On incrémente chaque indice pour montrer la distribution finale
  let index = int(acceptreject() * randomCounts.length);
  randomCounts[index]++;

  stroke(0);
  fill(127);
  let w = width / randomCounts.length;

  for (let x = 0; x < randomCounts.length; x++) {
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }
}

function acceptreject() {
  // Do this “forever” until you find a qualifying random value.
  while (true) {
    // Pick a random value.
    let r1 = random(1);
    // Assign a probability.
    let probability = r1;
    // Pick a second random value.
    let r2 = random(1);
    // Does it qualify?  If so, you’re done!
    if (r2 < probability) {
      return r1;
    }
  }
}