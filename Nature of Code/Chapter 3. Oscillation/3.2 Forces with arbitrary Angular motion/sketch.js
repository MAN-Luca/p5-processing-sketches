let movers = [];
let attractor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < 20; i++) {
    movers.push(new Mover(random(width), random(height), random(0.5, 3)));
  }
  attractor = new Attractor();
}

function draw() {
  background(24, 51, 110);
  
  attractor.display();
  
  for (let mover of movers) {
    
    let force = attractor.attract(mover);
    mover.applyForce(force);
    mover.update();
    mover.show();
  }

}
