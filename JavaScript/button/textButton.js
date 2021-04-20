class DrawingText extends MouseMethods {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(x, y) {
    let hasInput = false;

    if (hasInput) {
      return;
    } else {
      function addInput(x, y) {

        let input = document.createElement("input");

        input.type = "text";
        input.style.position = "fixed";
        input.style.left = x + "px";
        input.style.top = y + "px";
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
        }
      }

      function drawText(txt, x, y) {
        contextReal.textBaseline = "top";
        contextReal.font = "50px Arial";
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
