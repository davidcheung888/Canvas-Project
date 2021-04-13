let c = document.getElementById("drawingCanvas");
let ctx = c.getContext("2d");

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 2;
ctx.strokeStyle = "#ff8303";
//[lastX, lastY] = [finger.offsetX, finger.offsetY];

let isDrawing = false;
// let lastX = 0;
// let lastY = 0;
// x= width, y=height

function draw(finger) {
  if (!isDrawing) return;
  // stop the function from running when they are not mouse down
  console.log(finger);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(finger.offsetX, finger.offsetY);
  ctx.stroke();
  [lastX, lastY] = [finger.offsetX, finger.offsetY];
  // the mouse will start from last position
}

c.addEventListener("mousemove", draw);
c.addEventListener("mousedown", (finger) => {
  isDrawing = true;
  [lastX, lastY] = [finger.offsetX, finger.offsetY];
  // the mouse will start from last position
});
c.addEventListener("mouseup", () => (isDrawing = false));
c.addEventListener("mouseout", () => (isDrawing = false));

document.getElementById("clear").addEventListener(
  "click",
  function () {
    ctx.clearRect(0, 0, c.width, c.height);
  },
  false
);
