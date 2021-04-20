let restore_array = [];
let redo_array = [];

let undo = document.getElementById("undo");
undo.addEventListener("click", function () {
  if (restore_array.length <= 0) {
    restore_array = [];
    undo.disabled = true;
  } else {
    document.getElementById("redo").disabled = false;
    redo_array.unshift(restore_array.shift());
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    contextReal.putImageData(restore_array[0], 0, 0);
  }
});

document.getElementById("redo").addEventListener("click", function () {
  if (redo_array.length <= 0) {
    document.getElementById("redo").disabled = true;
  } else {
    undo.disabled = false;
    contextReal.putImageData(redo_array[0], 0, 0);
    restore_array.unshift(redo_array.shift());
  }
});
