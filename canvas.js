var c = document.getElementById("brownies");
var ctx = c.getContext("2d");
ctx.fillStyle = "#ff0000";
ctx.fillRect( 50, 50, 100, 200 );


function clearDaCanvas(){
    var canvas=document.getElementById("brownies");
    var context=canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}