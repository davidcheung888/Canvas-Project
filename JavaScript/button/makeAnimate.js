class Animation extends MouseMethods {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
}
let animateArray = [];
let aniIndex = 0;
let ani = document.getElementById("animate");
ani.addEventListener("click", function () {
  console.log("hello");
  animateArray.push(
    contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height)
  );
  console.log("animateArray", animateArray);
  contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
});

let playBut = document.getElementById("play");
let setTime;
playBut.addEventListener("click", function () {
  setTime = setInterval(animateFunction, 500);
});

function animateFunction() {
  if (aniIndex > animateArray.length - 1) {
    aniIndex = 0;
    return;
  }
  contextReal.putImageData(animateArray[aniIndex], 0, 0);
  aniIndex += 1;
}

let stopBut = document.getElementById("stop");
stopBut.addEventListener("click", function () {
  clearInterval(setTime);
});
