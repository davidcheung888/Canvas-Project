let colorBut = document.getElementById("color");

colorBut.addEventListener("input", function () {
  let color = colorBut.value;
  colorStroke = color;
  colorFill = color;
});
