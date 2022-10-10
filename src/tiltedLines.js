var enableDegeneration = true;
var step = 15;
var border = 40;

function setup() {
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent("frame");
}

function draw() {
  background("fff");

  for (var x = border; x <= 400 - step - border; x += step) {
    for (var y = border; y <= 400 - step - border; y += step) {
      if (enableDegeneration) {
        var rectWidth = Math.random() * 100;
        if (
          x >= 60 + border &&
          x <= 60 + rectWidth + border &&
          y >= 30 + border &&
          y <= 290 + border
        ) {
          continue;
        }
      }
      artist(x, y, step, step);
    }
  }
  noLoop();
}

function artist(x, y, width, height) {
  var leftToRight = Math.random() >= 0.5;
  strokeWeight(2);
  if (leftToRight) {
    line(x, y, x + width, y + height);
  } else {
    line(x + width, y, x, y + height);
  }
}

function rerender() {
  redraw();
}
