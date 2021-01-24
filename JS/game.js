//afin d'appeller le canvas dans le index
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const body = document.querySelector('body');
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

//TouchStart = evenement du au click sur l'écran
//ToucheMove = evenement après le click glisser le doight sur l'écran
//TouchEnd = evenement fin du click on relève le doight
//touchCancel = stop le touche move ou un evenement
body.addEventListener('touchstart',(e) =>{
    console.log("Clicked");
    let nvCercle = document.createElement('div');
    nvCercle.style.width = '50px';
    nvCercle.style.height = '50px';
    nvCercle.style.background = 'red';
    nvCercle.style.position = 'absolute';
    nvCercle.style.borderRadius = '50%';
    nvCercle.style.top = '0px';
    nvCercle.style.left = '0px';
    let posX = (e.touches[0].clientX - 25);
    let posY = (e.touches[0].clientY - 25);

    nvCercle.style.transform = `translate(${posX}px, ${posY}px)`;
    body.appendChild(nvCercle);
    
})
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
}
setInterval(gameLoop,1000/60);
function createCircle(){

    let nvCercle = document.createElement('div');
    nvCercle.style.width = '50px';
    nvCercle.style.height = '50px';
    nvCercle.style.background = 'red';
    nvCercle.style.position = 'absolute';
    nvCercle.style.borderRadius = '50%';
    nvCercle.style.top = '0px';
    nvCercle.style.left = '0px';
    let posX = (e.touches[0].clientX - 25);
    let posY = (e.touches[0].clientY - 25);

    nvCercle.style.transform = `translate(${posX}px, ${posY}px)`;
    body.appendChild(nvCercle);
    
}