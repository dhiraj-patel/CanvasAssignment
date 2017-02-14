var c = document.getElementById("brownies");
var ctx = c.getContext("2d");


function randRectangles(e){
    var randWidth = 22+Math.random()*100;
    var randHeight = 22+Math.random()*100;
    ctx.fillStyle = "#EEE8AA";
    ctx.fillRect(e.offsetX-25, e.offsetY - 25, 50, 50);
}

function clearDaCanvas(){
    var canvas=document.getElementById("brownies");
    var context=canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}

c.addEventListener("click",randRectangles);