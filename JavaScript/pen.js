class Fill extends PaintFunction {
  constructor(contextReal) {
    super();
    this.contextReal = contextReal;
  }
  onMouseDown(coord, event) {
    let red, blue, green, clickPoint, reachLeft, reachRight;

    flood(coord);

    function flood(coord) {
      let imgData = contextReal.getImageData(
        0,
        0,
        canvasReal.width,
        canvasReal.height
      );

      checkColor(coord);

      // Flood fill algorithm
      let pixelStack = [[coord[0], coord[1]]];

      while (pixelStack.length) {
        let newPos, x, y, pixelPos;
        newPos = pixelStack.pop();
        x = newPos[0];
        y = newPos[1];

        //  Locate the current pixel
        pixelPos = (y * canvasReal.width + x) * 4;

        // Go up as long as within the boundary
        while (y >= 0 && matchStartColor(pixelPos)) {
          y -= 1;
          pixelPos -= canvasReal.width * 4;
        }

        // Go down one pixel after while loop breaks
        pixelPos += canvasReal.width * 4;

        // index of y-axis
        y += 1;

        // While within the canvas
        while (y <= canvasReal.height - 1 && matchStartColor(pixelPos)) {
          // Fill the current pixel
          colorPixel(pixelPos);

          // Going downwards
          y = y + 1;

          // Check if the left is same color
          if (x > 0) {
            if (matchStartColor(pixelPos - 4)) {
              reachLeft = false;
              if (!reachLeft) {
                pixelStack.push([x - 1, y]);
                reachLeft = true;
              }
            }
          } else if (reachLeft) {
            reachLeft = false;
          }

          // Check the right is same color
          if (x < canvasReal.width - 1) {
            if (matchStartColor(pixelPos + 4)) {
              reachRight = false;
              if (!reachRight) {
                pixelStack.push([x + 1, y]);
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
      function colorPixel(pixelPos) {
        imgData.data[pixelPos] = currentColor[0];
        imgData.data[pixelPos + 1] = currentColor[1];
        imgData.data[pixelPos + 2] = [currentColor[2]];
        imgData.data[pixelPos + 3] = 255;
      }

      // Record the original color of a pixel to three variables
      function checkColor(coord) {
        clickPoint = (coord[1] * canvasReal.width + coord[0]) * 4;
        red = imgData.data[clickPoint];
        green = imgData.data[clickPoint + 1];
        blue = imgData.data[clickPoint + 2];
        console.log(red, green, blue);
      }
    }
  }
  onMouseUp(event) {
    cPush();
  }

  onDragging() {}
  onMouseMove() {}
  onMouseLeave() {}
  onMouseEnter() {}
}
