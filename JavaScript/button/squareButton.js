class DrawingSquare extends MouseMethods {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(x, y) {
    this.contextReal.strokeStyle = colorFill;
    this.contextDraft.strokeStyle = colorFill;
    this.contextReal.lineWidth = width;
    this.contextDraft.lineWidth = width;
    this.startingX = x;
    this.startingY = y;
  }

  onMouseDrag(x, y) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.strokeRect(
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
    this.contextReal.strokeRect(
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

let square = document.getElementById("square");
square.addEventListener("click", function () {
  console.log("square Button clicked");
  currentFunction = new DrawingSquare(contextReal, contextDraft);
});
