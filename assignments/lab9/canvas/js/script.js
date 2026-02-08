var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d");
ctx1.moveTo(0, 0);
ctx1.lineTo(200, 100);
ctx1.stroke();

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
ctx2.beginPath();
ctx2.moveTo(0, 0);
ctx2.lineTo(200, 100);
ctx2.lineWidth = 10;
ctx2.strokeStyle = "red";
ctx2.stroke();

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");
ctx3.beginPath();
ctx3.arc(95, 50, 40, 0, 2 * Math.PI);
ctx3.stroke();

var c5 = document.getElementById("myCanvas5");
var ctx5 = c5.getContext("2d");
ctx5.fillStyle = "green";
ctx5.fillRect(10, 10, 100, 100);

var c6 = document.getElementById("myCanvas6");
var ctx6 = c6.getContext("2d");
ctx6.beginPath();
ctx6.moveTo(100, 20);
ctx6.lineTo(180, 100);
ctx6.lineTo(20, 100);
ctx6.lineTo(100, 20);
ctx6.stroke();

var c8 = document.getElementById("myCanvas8");
var ctx8 = c8.getContext("2d");
ctx8.font = "30px Arial";
ctx8.fillText("Hello World", 10, 50);

var c9 = document.getElementById("myCanvas9");
var ctx9 = c9.getContext("2d");
var grd = ctx9.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx9.fillStyle = grd;
ctx9.fillRect(10, 10, 150, 80);

var cSmile = document.getElementById('canvasSmile');
var ctxS = cSmile.getContext('2d');
ctxS.lineWidth = 5;
ctxS.beginPath();
ctxS.arc(320, 240, 200, 0, 2 * Math.PI);
ctxS.stroke();
ctxS.closePath();
ctxS.beginPath();
ctxS.arc(270, 175, 30, 0, 2 * Math.PI);
ctxS.stroke();
ctxS.closePath();
ctxS.beginPath();
ctxS.arc(370, 175, 30, 0, 2 * Math.PI);
ctxS.stroke();
ctxS.closePath();
ctxS.beginPath();
ctxS.arc(320, 240, 150, 0, Math.PI);
ctxS.stroke();
ctxS.closePath();