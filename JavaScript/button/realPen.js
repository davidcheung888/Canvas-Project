class PenFunction extends MouseMethods {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  onMouseDown(x, y) {
    this.contextReal.strokeStyle = colorStroke;
    this.contextReal.fillStyle = colorFill;
    this.contextReal.lineWidth = width;
    this.contextReal.lineCap = "round";
    this.contextReal.beginPath();
    this.contextReal.moveTo(x, y);
    this.draw(x, y);
  }
  onMouseDrag(x, y) {
    this.draw(x, y);
  }

  onMouseMove(x, y) {}
  onMouseUp(x, y) {}
  onMouseLeave(x, y) {}

  draw(x, y) {
    this.contextReal.lineTo(x, y);
    this.contextReal.stroke();
  }
}

let pen = document.getElementById("pen");
pen.addEventListener("click", function () {
  console.log("pen button clicked");
  currentFunction = new PenFunction(contextReal, contextDraft);
});
