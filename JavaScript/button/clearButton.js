document.getElementById("clear").addEventListener("click", function () {
  contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
  contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
  animateArray = [];
});
