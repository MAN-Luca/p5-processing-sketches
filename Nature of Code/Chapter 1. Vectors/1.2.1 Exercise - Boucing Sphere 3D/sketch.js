let position;
let velocity;
let r = 20;
let dim = 400;
let angle = 0;

function setup() {
  // Rajout de WEBGL pour faire de la 3D
  // En WEBGL le centre est (0,0,0)
  createCanvas(windowWidth, windowHeight, WEBGL);

  position = createVector(
    random(-dim / 2, dim / 2),
    random(-dim / 2, dim / 2),
    random(-dim / 2, dim / 2)
  );

  velocity = createVector(
    floor(random([-10, 10])),
    floor(random([-10, 10])),
    floor(random([-10, 10]))
  );
}

function draw() {
  background(0);

  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  noFill();
  stroke(255);
  box(dim, dim, dim);

  position.add(velocity);

  if (position.x + r > dim / 2 || position.x - r < -dim / 2) {
    velocity.x *= -1;
  }
  if (position.y + r > dim / 2 || position.y - r < -dim / 2) {
    velocity.y *= -1;
  }
  if (position.z + r > dim / 2 || position.z - r < -dim / 2) {
    velocity.z *= -1;
  }

  translate(position.x, position.y, position.z);
  fill(200);
  sphere(r);

  angle += 0.01;
}
