class DrawingCircle extends MouseMethods {
  constructor(contextReal, contextDraft, startingX, startingY, radius) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
    this.startingX = startingX;
    this.startingY = startingY;
    this.radius = radius;
  }

  onMouseDown(x, y) {
    this.startingX = x;
    this.startingY = y;
    console.log(this.startingX, this.startingY);
  }

  onMouseDrag(x, y) {
    this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
    this.contextDraft.fillStyle = "blue";
    this.contextDraft.beginPath();
    this.circleX = this.startingX - x;
    this.circleY = this.startingY - y;
    this.squareRoot = Math.sqrt(
      this.circleX * this.circleX + this.circleY * this.circleY
    );
    this.contextDraft.arc(
      this.startingX,
      this.startingY,
      this.squareRoot,
      0,
      Math.PI * 2
    );
    this.contextDraft.fill();
    this.contextDraft.stroke();
  }

  onMouseUp(x, y) {
    this.contextDraft.clearRect(0, 0, canvasReal.width, canvasReal.height);
    this.contextReal.beginPath();
    this.contextReal.strokeStyle = "blue";
    this.contextReal.fillStyle = "blue";
    this.contextReal.arc(
      this.startingX,
      this.startingY,
      this.squareRoot,
      0,
      Math.PI * 2
    );
    this.contextReal.fill();
    this.contextReal.stroke();
  }
}

/**********************************************
 * Apply class to button
 * ==================================
 ***********************************************/
let circle = document.getElementById("circle");
circle.addEventListener("click", function () {
  console.log("circle Button clicked");
  currentFunction = new DrawingCircle(contextReal, contextDraft);
});
