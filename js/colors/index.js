let can = document.getElementById('table');
let draw = can.getContext('2d');

const ball = {
    x: can.width / 2,
    y: can.height / 2,
    radius: 10,
    velX: 5,
    velY: 5,
    speed: 5,
    color: "green"
}
const user = {
    x: 10,
    y: (can.height - 100) / 2,
    width: 10,
    height: 100,
    score: 0,
    color: "red"
}
draw.fillStyle = "black";
draw.fillRect(0, 0, can.clientWidth, can.height);
//drawing shapes

draw.fillStyle = "red"; //rectangle
draw.fillRect(100, 100, 30, 30);

draw.fillStyle = "yellow";
draw.beginPath();
draw.arc(200, 200, 10, 0, Math.PI * 2, false) //start at 0-angle and flase-cloock wise direction
draw.closePath();
draw.fill();