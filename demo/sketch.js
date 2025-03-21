let fps = 60;

function setup() {
  createCanvas(400, 400);
  
  frameRate(fps);
  frameRateMotion(fps);
}

function draw() {
  background(0);

  fill(255);
  textAlign(LEFT, CENTER);

  translate(200, 200);
  let b = getLoopBounce(0.25);
  circle(b * 100, 0, 20);
  text(b, 0, 30);
}