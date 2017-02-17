var c = document.getElementById("brownies");
var stop = document.getElementById("canvasButt");
var ctx = c.getContext("2d");

function clearDaCanvas(){
    var canvas=document.getElementById("brownies");
    var context=canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
}

var requestID;

var animate = function(){
    
    // init params for dot draw
    var radius = 25;
    var xcor = 10;

    var liner = function(e){
	requestID = window.requestAnimationFrame( liner );
	console.log(requestID);
	ctx.lineTo(e.offsetX,e.offsetY);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(xcor,100, radius, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle = "#41f4ca";
	ctx.fill();
	xcor++;

	ctx.beginPath();
	ctx.moveTo(e.offsetX,e.offsetY);
    } ;
    liner();
}

var stopIt = function(){
    console.log(requestID);
    window.cancelAnimationFrame( requestID );

}

c.addEventListener("click",animate);
stop.addEventListener("click",stopIt);

