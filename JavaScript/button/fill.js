class FillFunction extends MouseMethods {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  onMouseDown(x, y) {
    let red, blue, green, o, clickPoint, reachLeft, reachRight;
    let imgData = contextReal.getImageData(
      0,
      0,
      canvasReal.width,
      canvasReal.height
    );

    let startFlag = checkColor(x, y);
    if (startFlag) {
      alert("they are the same color");
      return;
    }

    let pixelStack = [[x, y]];
    while (pixelStack.length) {
      let newPos, coordinateX, coordinateY, pixelPos;
      newPos = pixelStack.pop();
      coordinateX = newPos[0];
      coordinateY = newPos[1];
      pixelPos = (coordinateY * canvasReal.width + coordinateX) * 4;
      while (coordinateY >= 0 && matchStartColor(pixelPos)) {
        coordinateY -= 1;
        pixelPos -= canvasReal.width * 4;
      }
      pixelPos += canvasReal.width * 4;
      coordinateY += 1;
      while (
        coordinateY <= canvasReal.height - 1 &&
        matchStartColor(pixelPos)
      ) {
        colorPixelFill(pixelPos);
        coordinateY = coordinateY + 1;
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
        pixelPos += canvasReal.width * 4;
      }
    }
    contextReal.putImageData(imgData, 0, 0);
    function matchStartColor(pixelPos) {
      let r = imgData.data[pixelPos];
      let g = imgData.data[pixelPos + 1];
      let b = imgData.data[pixelPos + 2];
      let oo = imgData.data[pixelPos + 3];

      return r == red && g == green && b == blue && oo == o;
    }
    function hexToRgb(colorFill) {
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorFill);
      return result
        ? {
            theR: parseInt(result[1], 16),
            theG: parseInt(result[2], 16),
            theB: parseInt(result[3], 16),
          }
        : null;
    }
    function colorPixelFill(pixelPos) {
      imgData.data[pixelPos] = hexToRgb(colorFill).theR;
      imgData.data[pixelPos + 1] = hexToRgb(colorFill).theG;
      imgData.data[pixelPos + 2] = hexToRgb(colorFill).theB;
      imgData.data[pixelPos + 3] = 255;
    }
    function checkColor(x, y) {
      let result = 0;
      clickPoint = (y * canvasReal.width + x) * 4;
      red = imgData.data[clickPoint];
      green = imgData.data[clickPoint + 1];
      blue = imgData.data[clickPoint + 2];
      o = imgData.data[clickPoint + 3];
      if (red == 66 && blue == 66 && green == 66 && o == 255) {
        result = 1;
      }
      console.log("this", x, y);
      console.log(red, green, blue);
      return result;
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
