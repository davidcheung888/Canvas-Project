class DrawingSquare extends MouseMethods {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(x, y) {
    this.contextReal.fillStyle = colorFill;
    this.contextDraft.fillStyle = colorFill;
    this.startingX = x;
    this.startingY = y;
  }

  onMouseDrag(x, y) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.fillRect(
      this.startingX,
      this.startingY,
      x - this.startingX,
      x - this.startingX
    );
    console.log(x - this.startingX, y - this.startingY);
  }

  onMouseMove(x, y) {}
  onMouseUp(x, y) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.fillRect(
      this.startingX,
      this.startingY,
      x - this.startingX,
      x - this.startingX
    );
  }

  // onMouseUp(x, y) {
  //   // when they drag the mouse, keep on drawing

  //   this.contextReal.beginPath();
  //   this.contextReal.moveTo(this.startingX, this.startingY);
  //   this.contextReal.lineTo();
  //   this.contextReal.stroke();
  // }
}

// let square = document.getElementById("square");
// square.addEventListener("click", function () {
//   console.log("square Button clicked");
//   currentFunction = new DrawingSquare(contextReal, contextDraft);
// });

window.addEventListener("keydown", function (e) {
  console.log("onkeydown", e);
  if (e.keyCode === 16) {
    console.log("square Button clicked");
    currentFunction = new DrawingSquare(contextReal, contextDraft);
  }
});
