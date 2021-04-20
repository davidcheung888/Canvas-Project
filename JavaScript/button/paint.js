

class DrawingPaint extends MouseMethods {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(x, y) {
    
  }

  onMouseDrag(x, y) {
    
  }
}
let paint = document.getElementById("paint");
paint.addEventListener("click", function () {
  console.log("paint button clicked");
  currentFunction = new DrawingPaint(contextReal, contextDraft);
});
