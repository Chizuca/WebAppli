//afin d'appeller le canvas dans le index
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//redimenssioné en fonction du client
canvas.width = document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = document.documentElement.clientHeight || document.body.clientHeight;
//permet de faire un update la fonction choisit
setInterval(gameLoop,1000/60);

let x = 10;
let y = 10;
let movex = 2;
let movey = 2;
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;
let radius = 70;

function gameLoop(){
    //fonction qui permet d'avoir un fond gris
    ctx.fillStyle = "grey";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "purple";
    ctx.fillRect(x,y,50,50);
    if((x+50+movex >= canvas.width)||(x-movex <= 0))
    {
        movex *= -1;
    }
    if((y+50+movey >= canvas.height)||(y-movey <= 0))
    {
        movey *= -1;
    }
    y += movey;
    x += movex;
    
    context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();
}
function createCircle(){

    context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();
}