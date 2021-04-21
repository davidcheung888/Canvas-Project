class bubbleFunction extends MouseMethods {
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

    console.log(this.startingX, this.startingY);

    this.contextReal.beginPath();
    this.contextReal.moveTo(this.startingX + 50, this.startingY);
    this.contextReal.quadraticCurveTo(
      this.startingX,
      this.startingY,
      this.startingX,
      this.startingY + 37.5
    );
    this.contextReal.quadraticCurveTo(
      this.startingX,
      this.startingY + 75,
      this.startingX + 25,
      this.startingY + 75
    );
    this.contextReal.quadraticCurveTo(
      this.startingX + 25,
      this.startingY + 95,
      this.startingX + 5,
      this.startingY + 100
    );
    this.contextReal.quadraticCurveTo(
      this.startingX + 35,
      this.startingY + 95,
      this.startingX + 40,
      this.startingY + 75
    );
    this.contextReal.quadraticCurveTo(
      this.startingX + 100,
      this.startingY + 75,
      this.startingX + 100,
      this.startingY + 37.5
    );
    this.contextReal.quadraticCurveTo(
      this.startingX + 100,
      this.startingY,
      this.startingX + 50,
      this.startingY
    );
    this.contextReal.stroke();
  }
}
// let textBubble = document.getElementById("textButton");
// textBubble.addEventListener("click", function () {
//   console.log("textBubble button clicked");
//   currentFunction = new textBubbleFunction(contextReal, contextDraft);
// });

$("#bubble").click(function () {
  console.log("bubble button clicked");
  currentFunction = new bubbleFunction(contextReal, contextDraft);
});
