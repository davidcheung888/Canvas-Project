let canvasReal = document.getElementById("canvasReal");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvasDraft");
let contextDraft = canvasDraft.getContext("2d");


let currentFunction;
let dragging = false;

let colorStroke = color;
let colorFill = color;
let width = document.getElementById("penweight").value;
document.getElementById("penweight").addEventListener("input", function () {
  width = document.getElementById("penweight").value;
});

let lineCapReal = "round";

// set undo and redo button to disabled
undo.disabled = true;
document.getElementById("redo").disabled = true;

// Capture Mouse Event

function captureMouseEvent(event) {
  this.x = event.offsetX;
  this.y = event.offsetY;
  // console.log("mouseEvent: ", x, y);
}

canvasDraft.addEventListener("mousedown", function (event) {
  dragging = true;
  captureMouseEvent(event);
      // set canvas font
  contextDraft.font = "16px Arial";

  currentFunction.onMouseDown(x, y);
});

canvasDraft.addEventListener("mousemove", function (event) {
  // console.log(event);
  captureMouseEvent(event);

  if (dragging != true) {
    currentFunction.onMouseMove(x, y);
  } else {
    currentFunction.onMouseDrag(x, y);
  }
});

canvasDraft.addEventListener("mouseup", function (event) {
  dragging = false;
  captureMouseEvent(event);
  currentFunction.onMouseUp(x, y);
  restore_array.unshift(
    contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height)
  );
  redo_array = [];
  undo.disabled = false;
  document.getElementById("redo").disabled = true;
});

canvasDraft.addEventListener("mouseleave", function (event) {
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
