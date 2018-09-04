var canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var numberCir = Math.floor(canvas.width);
window.addEventListener("resize", function() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  numberCir = Math.floor(widows.innerWidth * 0.8);
  init();
});
var c = canvas.getContext("2d");

var mouse = { x: undefined, y: undefined };
var maxRadius = 30;
var colorArray = [
  "#b2b9c4",
  "#75d6c7",
  "#61d8ab",
  "#3ec478",
  "#5bd85d",
  "#82d85b",
  "#c1d85b",
  "#d8ae5b",
  "#ef4923",
  "#ef2394",
  "#b223ef"
];//Array of color for balls
window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});//get mouse axis

function Circle(x, y, dy, dx, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  minRadius = this.radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.radius = radius;
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  };
  this.update = function() {
    if (this.x > innerWidth - this.radius || this.x < this.radius) {
      this.dx = -this.dx;
    }
    if (this.y > innerHeight - this.radius || this.y < this.radius) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    if (
      mouse.x - this.x < 40 &&
      mouse.x - this.x > -40 &&
      mouse.y - this.y < 40 &&
      mouse.y - this.y > -40
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > minRadius) {
      this.radius -= 1;
    }
    this.draw();
  };
}
var circleArray = [];
function init() {
  circleArray = [];
  for (var i = 0; i < numberCir; i++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;

    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 4;
    var dy = (Math.random() - 0.5) * 4;
    var radius = Math.random() * 8 + 3;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}
// open loop function always run 
console.log(circleArray);
function animation() {
  requestAnimationFrame(animation);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  } 
}
init();
animation();
