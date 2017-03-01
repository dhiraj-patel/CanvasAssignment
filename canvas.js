var c = document.getElementById("brownies");
var stop = document.getElementById("canvasButt");
var ctx = c.getContext("2d");

function clearDaCanvas(){
    var canvas=document.getElementById("brownies");
    var context=canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
}
var liner = function(e){
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(e.offsetX,e.offsetY, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#41f4ca";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(e.offsetX,e.offsetY);
} ;

c.addEventListener("click",liner);
stop.addEventListener("click",clearDaCanvas);
