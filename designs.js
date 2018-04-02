// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const canvas = document.getElementById(“pixelCanvas”);
const ctx = canvas.getContext(“2d”);
ctx.fillStyle = “red”;
ctx.fillRect(10, 10, 150, 150);

function drawLine(x1, y1, x2, y2){
   ctx.beginPath();
   ctx.moveTo(x1, y1);
   ctx.lineTo(x2, y2);
   ctx.stroke();
}

drawLine(15, 175, 250, 350);
// Your code goes here!

}
