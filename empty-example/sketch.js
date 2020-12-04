function setup() {
  createCanvas(800, 800);
  frameRate(1);
}

function draw() {
  background(30, 100, 255);
  const randos = [10, 30, 90, 140, 190, 210, 240, 270, 330, 340];
  let x = 100;
  let y = 100;
  let height = 10 + frameCount * 2;
  let width = height * 1.618033988749895;

  stroke(0);
  strokeWeight(2);
  fill(0, 0, 200, 50);
  rect(y, x, 400 * 1.618033988749895, 400);
}
