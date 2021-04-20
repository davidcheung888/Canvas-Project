class DrawingLine extends MouseMethods {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(x, y) {
    this.contextReal.strokeStyle = colorStroke;
    this.contextReal.fillStyle = colorFill;
    this.contextDraft.strokeStyle = colorStroke;
    this.contextDraft.fillStyle = colorFill;
    this.contextReal.lineWidth = width;
    this.contextDraft.lineWidth = width;

    // this.context.moveTo(this.startingX, this.startingY);
    // styling
    this.startingX = x;
    this.startingY = y;
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.startingX, this.startingY);
    // this.context.moveTo(this.startingX, this.startingY);
    // this.context.beginPath();
    console.log(x);
    console.log(y);
  }
  // When the user presses and moves the mouse, what happens to the context?
  onMouseDrag(x, y) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.startingX, this.startingY);
    this.contextDraft.lineTo(x, y);
    this.contextDraft.stroke();
  }

  onMouseUp(x, y) {
    // when they drag the mouse, keep on drawing
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextReal.beginPath();
    this.contextReal.moveTo(this.startingX, this.startingY);
    this.contextReal.lineTo(x, y);
    this.contextReal.stroke();
    // console.log(x);
  }
}

/**********************************************
 * Apply class to button
 * ==================================
 ***********************************************/
$("#line").click(function () {
  console.log("Line button clicked");
  currentFunction = new DrawingLine(contextReal, contextDraft);
});
