

canvas = document.getElementById('drawingCanvas');
canvasCtx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// ctx.strokeStyle = "#ff8303";
// ctx.fillStyle = "#ff0000";
// The fillStyle property can be a CSS color, a gradient, or a pattern. The default fillStyle is black.
// ctx.fillRect(75, 75, 75, 75);
// ctx.fillRect(x,y) 
// method draws a rectangle, filled with the fill style, on the canvas:
ctx.lineJoin ='round';
ctx.lineCap = 'round';
ctx.lineWidth = 60;


let isDrawing = false;
const lastX = 0;
const lastY = 0;
// x= width, y=height

function draw(finger) {
  if (!isDrawing) return;
  // stop the function from running when they are not mouse down
  console.log(finger);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(finger.offsetX, finger.offsetY);
  ctx.strokeStyle();
  [lastX, lastY] = [finger.offsetX, finger.offsetY];
  // the mouse will start from last position
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (finger) => {
    isDrawing = true;
    [lastX, lastY] = [finger.offsetX, finger.offsetY];
    // the mouse will start from last position
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
