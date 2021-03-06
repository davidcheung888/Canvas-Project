class RectFunction extends MouseMethods {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  onMouseDown(x, y) {
    this.contextReal.strokeStyle = colorFill;
    this.contextDraft.strokeStyle = colorFill;
    // this.contextDraft.fillStyle = colorFill;
    // this.contextReal.fillStyle = colorFill;
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
      y - this.startingY
    );
    console.log(x - this.startingX, y - this.startingY);
  }
  // onMouseMove(x, y) {}
  onMouseUp(x, y) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.strokeRect(
      this.startingX,
      this.startingY,
      x - this.startingX,
      y - this.startingY
    );
  }
  onMouseLeave(x, y) {}
}

let rectangle = document.getElementById("recNotFill");
rectangle.addEventListener("click", function () {
  console.log("Rectangle Button clicked");
  currentFunction = new RectFunction(contextReal, contextDraft);
});
