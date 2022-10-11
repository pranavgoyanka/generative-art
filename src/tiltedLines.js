const canvasSketch = require('canvas-sketch');
const p5 = require('p5');

const preload = p5 => {
  // You can use p5.loadImage() here, etc...
};

const settings = {
  // Pass the p5 instance, and preload function if necessary
  p5: { p5, preload },
  dimensions: [2048, 2048]
  // Turn on a render loop
  // animate: true
};

var enableDegeneration = true;
var step = 15;
var border = 40;
let scale = 2048

function artist(p5, x, y, width, height) {
  var leftToRight = Math.random() >= 0.5;
  p5.strokeWeight(2);
  if (leftToRight) {
    p5.line(x, y, x + width, y + height);
  } else {
    p5.line(x + width, y, x, y + height);
  }
}





canvasSketch(() => {
  // Return a renderer, which is like p5.js 'draw' function
  return ({ p5, time, width, height }) => {
    // Draw with p5.js things
    p5.background("fff");
    for (var x = border; x <= scale - border; x += step) {
      for (var y = border; y <= scale - border; y += step) {
        if (enableDegeneration) {
          var rectWidth = Math.random() * 100;
          if (
            // todo: fix magic numbers
            x >= 60 + border &&
            x <= 60 + rectWidth + border &&
            y >= 30 + border &&
            y <= 290 + border
          ) {
            continue;
          }
        }
        artist(p5, x, y, step, step);
      }
    }
  };
}, settings);
