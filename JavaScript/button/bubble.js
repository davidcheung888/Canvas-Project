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
    this.contextReal.moveTo(this.startingX + 75, this.startingY + 25);
    this.contextReal.quadraticCurveTo(
      this.startingX + 25,
      this.startingY + 25,
      this.startingX + 25,
      this.startingY + 62.5
    );
    this.contextReal.quadraticCurveTo(
      this.startingX + 25,
      this.startingY + 100,
      this.startingX + 50,
      this.startingY + 100
    );
    this.contextReal.quadraticCurveTo(
      this.startingX + 50,
      this.startingY + 120,
      this.startingX + 30,
      this.startingY + 125
    );
    this.contextReal.quadraticCurveTo(
      this.startingX + 60,
      this.startingY + 120,
      this.startingX + 65,
      this.startingY + 100
    );
    this.contextReal.quadraticCurveTo(
      this.startingX + 125,
      this.startingY + 100,
      this.startingX + 125,
      this.startingY + 62.5
    );
    this.contextReal.quadraticCurveTo(
      this.startingX + 125,
      this.startingY + 25,
      this.startingX + 75,
      this.startingY + 25
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
