let canvasReal = document.getElementById("canvasReal");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvasDraft");
let contextDraft = canvasDraft.getContext("2d");

let currentFunction;
let dragging = false;

let colorStroke = "#42445A";
let colorFill = "#42445A";
let width = 10;
let lineCap = "round";

// Capture Mouse Event

function captureMouseEvent(event) {
  this.x = event.offsetX;
  this.y = event.offsetY;
}

canvasReal.addEventListener("mousedown", function (event) {
  dragging = true;
  console.log("Mouse Down");
  captureMouseEvent(event);
  currentFunction.onMouseDown(x, y);
});

canvasReal.addEventListener("mousemove", function (event) {
  captureMouseEvent(event);

  if (dragging != true) {
    currentFunction.onMouseMove(x, y);
  } else {
    console.log("Dragging");
    currentFunction.onMouseDrag(x, y);
  }
});

canvasReal.addEventListener("mouseup", function (event) {
  dragging = false;
  console.log("Mouse Up");
  captureMouseEvent(event);
  currentFunction.onMouseUp(x, y);
});

canvasReal.addEventListener("mouseleave", function (event) {
  dragging = false;
  console.log("Mouse Leave");
  captureMouseEvent(event);
  currentFunction.onMouseLeave(x, y);
});

class MouseMethods {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseDrag() {}
  onMouseUp() {}
}
