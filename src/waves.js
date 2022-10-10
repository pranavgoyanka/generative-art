var step = 10;
var lines = [];
var wdt = 400;

function setup() {
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent("frame");
}

function draw() {
  background("fff");
  strokeWeight(1);
  // point(200, 200);
  createLines(10);
  createLines(20);
  noLoop();
}

function createLines(step) {
  // create lines full of points

  for (var i = step; i < wdt; i += step) {
    console.log(i);
    var ln = [];

    for (var j = step; j <= wdt - step; j += step) {
      var point = { x: j, y: i + (random() * step) / 2 };
      ln.push(point);
      console.log(point);
    }
    lines.push(ln);
  }

  // render lines
  for (var i = 0; i < lines.length; i++) {
    // console.log(lines[i]);
    for (var j = 0; j < lines[i].length - 1; j++) {
      line(lines[i][j].x, lines[i][j].y, lines[i][j + 1].x, lines[i][j + 1].y);
    }
  }
  lines = [];
}

function rerender() {
  //   clear();
  redraw();
}
