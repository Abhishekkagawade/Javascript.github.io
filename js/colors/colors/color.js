var NoS = 6;
var arr = [];
var picked;
var squres = document.getElementsByClassName("squre");
var targetColor = document.getElementById('targetColor');
var msg = document.getElementById("message");
var head = document.querySelector("h1");
var reset = document.getElementById("newColor");
//calling init fn

init();

function init() {
    arr = generateRandomColor(NoS);
    picked = arr[RandomPickedColorIndx()];
    targetColor.textContent = picked;


    for (var i = 0; i < squres.length; i++) {
        squres[i].style.backgroundColor = arr[i];
        squres[i].addEventListener("click", function() {
            if (picked === this.style.backgroundColor) {
                msg.textContent = "Correct";
                msg.style.color = "green";
                changeColor(this.style.backgroundColor);
                reset.textContent = "Play Again?";
            } else {
                msg.textContent = "try agin";
                msg.style.color = "red";
                this.style.backgroundColor = "black";

            }
        });
    }
}


//reset.addEventListener("click", resetIn);
function RandomPickedColorIndx() {
    return Math.floor(Math.random() * arr.length);

}

function generateRandomColor(limit) {
    var color = [];
    for (var i = 0; i < limit; i++)
        color.push(rgbGenerator());
    return color;
}

function rgbGenerator() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";

}

function changeColor(color) {
    for (var i = 0; i < squres.length; i++)
        squres[i].style.backgroundColor = color;
    head.style.backgroundColor = color;
}
reset.addEventListener("click", resetIn)

function resetIn() {
    arr = generateRandomColor(NoS);
    picked = arr[RandomPickedColorIndx()];
    targetColor.textContent = picked;
    msg.textContent = "";
    head.style.backgroundColor = "steelblue";
    for (var i = 0; i < squres.length; i++)
        squres[i].style.backgroundColor = arr[i];

}