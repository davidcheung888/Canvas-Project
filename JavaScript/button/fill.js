class FillFunction extends MouseMethods {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  onMouseDown(x, y) {
    let red, blue, green, clickPoint, reachLeft, reachRight;
    let imgData = contextReal.getImageData(
      0,
      0,
      canvasReal.width,
      canvasReal.height
    );
    checkColor(x, y);
    // Flood fill algorithm
    let pixelStack = [[x, y]];
    while (pixelStack.length) {
      let newPos, coordinateX, coordinateY, pixelPos;
      newPos = pixelStack.pop();
      coordinateX = newPos[0];
      coordinateY = newPos[1];
      //  Locate the current pixel
      pixelPos = (coordinateY * canvasReal.width + coordinateX) * 4;
      // Go up as long as within the boundary
      while (coordinateY >= 0 && matchStartColor(pixelPos)) {
        coordinateY -= 1;
        pixelPos -= canvasReal.width * 4;
      }
      // Go down one pixel after while loop breaks
      pixelPos += canvasReal.width * 4;
      // index of y-axis
      coordinateY += 1;
      // While within the canvas
      while (
        coordinateY <= canvasReal.height - 1 &&
        matchStartColor(pixelPos)
      ) {
        // Fill the current pixel
        colorPixelFill(pixelPos);
        // Going downwards
        coordinateY = coordinateY + 1;
        // Check if the left is same color
        if (coordinateX > 0) {
          if (matchStartColor(pixelPos - 4)) {
            reachLeft = false;
            if (!reachLeft) {
              pixelStack.push([coordinateX - 1, coordinateY]);
              reachLeft = true;
            }
          }
        } else if (reachLeft) {
          reachLeft = false;
        }
        // Check the right is same color
        if (coordinateX < canvasReal.width - 1) {
          if (matchStartColor(pixelPos + 4)) {
            reachRight = false;
            if (!reachRight) {
              pixelStack.push([coordinateX + 1, coordinateY]);
              reachRight = true;
            }
          } else if (reachRight) {
            reachRight = false;
          }
        }
        // Go down to next location
        pixelPos += canvasReal.width * 4;
      }
    }
    contextReal.putImageData(imgData, 0, 0);
    // Check new color equal to start color
    function matchStartColor(pixelPos) {
      var r = imgData.data[pixelPos];
      var g = imgData.data[pixelPos + 1];
      var b = imgData.data[pixelPos + 2];
      return r == red && g == green && b == blue;
    }
    // Fill color
    function colorPixelFill(pixelPos) {
      imgData.data[pixelPos] = 66;
      imgData.data[pixelPos + 1] = 66;
      imgData.data[pixelPos + 2] = 66;
      imgData.data[pixelPos + 3] = 255;
    }
    // Record the original color of a pixel to three variables
    function checkColor(x, y) {
      clickPoint = (y * canvasReal.width + x) * 4;
      red = imgData.data[clickPoint];
      green = imgData.data[clickPoint + 1];
      blue = imgData.data[clickPoint + 2];
      console.log("this", x, y);
      console.log(red, green, blue);
    }
  }
  onDragging() {}
  onMouseMove() {}
  onMouseLeave() {}
  onMouseEnter() {}
}

let fillBut = document.getElementById("fill");
fillBut.addEventListener("click", function () {
  console.log("Fill Button clicked");
  currentFunction = new FillFunction(contextReal, contextDraft);
});
