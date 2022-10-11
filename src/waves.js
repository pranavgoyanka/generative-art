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

var lines = [];
var wdt = 2048;


function createLines(p5, step) {
  // create lines full of points

  for (var i = step; i < wdt; i += step) {
    console.log(i);
    var ln = [];

    for (var j = step; j <= wdt - step; j += step) {
      var point = { x: j, y: i + (p5.random() * step) / 2 };
      ln.push(point);
      console.log(point);
    }
    lines.push(ln);
  }

  // render lines
  for (var i = 0; i < lines.length; i++) {
    // console.log(lines[i]);
    for (var j = 0; j < lines[i].length - 1; j++) {
      p5.line(lines[i][j].x, lines[i][j].y, lines[i][j + 1].x, lines[i][j + 1].y);
    }
  }
  lines = [];
}




canvasSketch(() => {
  // Return a renderer, which is like p5.js 'draw' function
  return ({ p5, time, width, height }) => {
    // Draw with p5.js things
    p5.background("fff");
    p5.strokeWeight(1);
    createLines(p5, 10 * 2048 / 400);
    createLines(p5, 20 * 2048 / 400);
    p5.noLoop();
  };
}, settings);
