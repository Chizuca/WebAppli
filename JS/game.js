//afin d'appeller le canvas dans le index
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//redimenssioné en fonction du client
canvas.width = document.documentElement.clientWidth || document.body.clientWidth;
canvas.height = document.documentElement.clientHeight || document.body.clientHeight;
//permet de faire un update la fonction choisit

let x = 10;
let y = 10;
let movex = 2;
let movey = 2;
let centerX = canvas.width / 2;
let centerY = canvas.height / 2;

function gameLoop(){
    //fonction qui permet d'avoir un fond gris
    ctx.fillStyle = "grey";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "purple";
    ctx.fillRect(x,y,50,50);
    if((x+50+movex >= canvas.width)||(x+movex <= 0))
    {
        movex *= -1;
    }
    if((y+50+movey >= canvas.height)||(y+movey <= 0))
    {
        movey *= -1;
    }
    x += movex;
    y += movey;
   createCircle();
}
setInterval(gameLoop,1000/60);
function createCircle(){


   // ctx.fillStyle = obj.color;
   // ctx.arc(obj.x, obj.y, obj.r, obj.offset + frame / 30, obj.offset + Math.PI + frame / 30);

    ctx.beginPath()
      ctx.arc(centerX, centerY, 70, 0, 2 * Math.PI);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#003300';
      ctx.stroke();
      ctx.closePath();
}