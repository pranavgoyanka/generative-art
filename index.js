var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

var size = 320;
var step = 10;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
context.scale(dpr, dpr);

context.lineCap = "square";
context.lineWidth = 2;
var leftRight = false;
function draw(x, y, width = size, height = size) {
  var leftToRight = Math.random() >= 0.5;

  // if (leftToRight) {
  //   context.moveTo(x, y);
  //   context.lineTo(x + width, y + height);
  // } else {
  //   context.moveTo(x + width, y);
  //   context.lineTo(x, y + height);
  // }

  if (!leftRight) {
    context.moveTo(x, y);
    context.lineTo(x + width, y + height);
  } else {
    context.moveTo(x + width, y);
    context.lineTo(x, y + height);
  }
  // leftRight = !leftRight;
  context.stroke();
}

for (var x = 0; x < size; x += step) {
  for (var y = 0; y < size; y += step) {
    console.log(x, y);
    // if (x + y < 20 && x + y > 60) {
    // if ((x + y) % 40 === 0) {
    var rectWidth = Math.random() * 100;
    if (x >= 60 && x <= 60 + rectWidth && y >= 30 && y <= 290) {
      continue;
    }
    draw(x, y, step, step);
    // y += 10;
    // }
  }
  y += 10;
  leftRight = !leftRight;
  if (!leftRight) {
    x += 10;
  }
}

// clear area

//decide orientation
var verticalRectangle = Math.random() >= 0.5;

if (verticalRectangle) {
} else {
}

// context.clearRect(100, 100, 100, 100);

var x = 0;
var y = 0;

// for (x; x <= size; x += step) {
//   draw(x, y, step, step);
// }
