let x = 400;
let y = 400;
let phi = 1.618033988749895;
let toggle = 0;
let height = 400;
let width = height * phi;
let goldenHeight = height;
let goldenWidth = goldenHeight;
let newLine = false;
let goldenX = x;
let goldenY = y;

function setup() {
  createCanvas(1600, 1600);
  frameRate(12);
}

console.log(`start; height=${goldenHeight}, X=${goldenX}, Y=${goldenY}`);

function draw() {
  toggle = frameCount % 2;
  background(30, 100, 255);
  stroke(0);
  strokeWeight(2);
  noFill();
  rect(x, y, width, height);
  stroke(255);
  rect(goldenX, goldenY, goldenWidth, goldenHeight);
  if (toggle === 0) {
    goldenY = goldenY + goldenHeight * phi;
    goldenHeight = goldenHeight / phi;
    goldenHeight = goldenHeight * -1;
    goldenWidth = goldenHeight;
    console.log(`odd; height=${goldenHeight}, X=${goldenX}, Y=${goldenY}`);
    newLine = false;
  } else {
    goldenX = goldenX + goldenHeight * phi;
    goldenHeight = goldenHeight / phi;
    goldenWidth = goldenHeight * -1;
    console.log(`even; height=${goldenHeight}, X=${goldenX}, Y=${goldenY}`);
    newLine = true;
  }
  if (frameCount === 14) {
    frameCount = 0;
    goldenHeight = height;
    goldenWidth = goldenHeight;
    goldenX = x;
    goldenY = y;
  }
}

// function mouseClicked(event) {
//   return false;
// }
