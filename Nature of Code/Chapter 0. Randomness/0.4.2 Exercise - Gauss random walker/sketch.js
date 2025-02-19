
let walker;
let slider;

function setup() {
  createCanvas(1000, 1000);
  walker = new Walker();
  background(255);
  
  slider = createSlider(1, 10, 0.1);
  slider.position(10, height + 10);
}

function draw() {
  
  let sd = slider.value();
  let stepSize = abs(randomGaussian(width / 8, sd));
  
  walker.step(stepSize);
  walker.checkBorders();
  walker.show();
}
