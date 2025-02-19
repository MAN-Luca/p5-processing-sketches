function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // A normal distribution with mean 320 and standard deviation 60
  let x = randomGaussian(windowWidth / 2, 80);
  // ou bien 
  // let x = 60 * ranndomGaussian() + 320;
  
  noStroke();
  fill(0, 10);
  circle(x, height / 2, 16);
  
}