class DrawingText extends MouseMethods {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(x, y) {
    this.contextReal.fillStyle = colorFill;
    this.contextDraft.fillStyle = colorFill;
    let hasInput = false;

    if (hasInput) {
      return;
    } else {
      function addInput(x, y) {
        let input = document.createElement("input");

        input.type = "text";
        input.style.position = "fixed";
        input.style.left = x + 200 + "px";
        input.style.top = y + 50 + "px";
        input.style.zIndex = 100001;
        document.body.appendChild(input);

        input.onkeydown = handleEnter;

        input.focus();
        hasInput = true;
      }
      addInput(x, y);

      function handleEnter(e) {
        if (e.key === "Enter") {
          drawText(this.value, x, y);
          document.body.removeChild(this);
          hasInput = false;
          restore_array.unshift(
            contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height)
          );
          redo_array = [];
          undo.disabled = false;
          document.getElementById("redo").disabled = true;
        }
      }

      function drawText(txt, x, y) {
        contextReal.textBaseline = "top";
        contextReal.font = `${width}px Arial`;
        contextReal.fillText(txt, x, y);
      }
    }
  }
}
/**********************************************
 * Apply class to button
 * ==================================
 ***********************************************/
$("#text").click(function () {
  console.log("text button clicked");
  currentFunction = new DrawingText(contextReal, contextDraft);
  //   console.log("text");
});
