const canvas = document.getElementById("canvasReal");
const ctx = canvas.getContext("2d");

// variables
let painting = false;

function startPosition(e) {
  painting = true;
  draw(e);
}

function finishedPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;
  ctx.lineWidth = 10;
  ctx.strokeStyle = "#ff8303";
  ctx.lineCap = "round";

  ctx.lineTo(e.offsetX, e.offsetY);
  console.log(e.clientX, e.clientY);
  ctx.stroke();
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw);

// document.getElementById("clear").addEventListener(
//   "click",
//   function () {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//   },
//   false
// );
