class eraserFunction extends MouseMethods {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  onMouseDrag(x, y) {
    contextReal.clearRect(x, y, width, width);
    console.log(this.contextReal);
    console.log("hole", contextReal);
  }
  onMouseMove() {}
  onMouseLeave() {}
  onMouseEnter() {}
}

let eraserBut = document.getElementById("eraser");
eraserBut.addEventListener("click", function () {
  console.log("eraser clicked");
  currentFunction = new eraserFunction(contextReal, contextDraft);
});
