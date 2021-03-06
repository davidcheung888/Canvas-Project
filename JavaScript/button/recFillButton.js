class RecFillFunction extends MouseMethods {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  onMouseDown(x, y) {
    this.contextReal.strokeStyle = colorFill;
    this.contextDraft.strokeStyle = colorFill;
    this.contextDraft.fillStyle = colorFill;
    this.contextReal.fillStyle = colorFill;
    this.startingX = x;
    this.startingY = y;
  }

  onMouseDrag(x, y) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.fillRect(
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
    this.contextReal.fillRect(
      this.startingX,
      this.startingY,
      x - this.startingX,
      y - this.startingY
    );
  }
  onMouseLeave(x, y) {}
}

let recFill = document.getElementById("recFill");
recFill.addEventListener("click", function () {
  console.log("RecFill Button clicked");
  currentFunction = new RecFillFunction(contextReal, contextDraft);
});
