class DrawingSquareFill extends MouseMethods {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(x, y) {
        this.contextDraft.strokeStyle = colorFill;
        this.contextReal.fillStyle = colorFill;
        this.contextDraft.fillStyle = colorFill;
        this.startingX = x;
        this.startingY = y;
    }

    onMouseDrag(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.strokeStyle = colorFill;
        this.contextDraft.fillRect(
            this.startingX,
            this.startingY,
            x - this.startingX,
            x - this.startingX
        );

        console.log(x - this.startingX, y - this.startingY);
    }

    onMouseMove(x, y) {}
    onMouseUp(x, y) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.fillRect(
            this.startingX,
            this.startingY,
            x - this.startingX,
            x - this.startingX
        );
    }

    // onMouseUp(x, y) {
    //   // when they drag the mouse, keep on drawing

    //   this.contextReal.beginPath();
    //   this.contextReal.moveTo(this.startingX, this.startingY);
    //   this.contextReal.lineTo();
    //   this.contextReal.stroke();
    // }
}

let squareFill = document.getElementById("squareFill");
squareFill.addEventListener("click", function () {
    console.log("squareFill Button clicked");
    currentFunction = new DrawingSquareFill(contextReal, contextDraft);
});