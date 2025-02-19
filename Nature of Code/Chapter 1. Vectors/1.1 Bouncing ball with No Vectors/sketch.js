let x, y, xSpeed, ySpeed, r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  xSpeed = floor(random(-20, 20));
  ySpeed = floor(random(-20, 20));
  r = 40;
}

function draw() {
  background(0);

  x += xSpeed;
  y += ySpeed;

  if (x + r > width || x - r < 0) {
    xSpeed *= -1;
  }
  if (y + r > height || y - r < 0) {
    ySpeed *= -1;
  }

  stroke(255);
  fill(200);
  circle(x, y, r * 2);
}
