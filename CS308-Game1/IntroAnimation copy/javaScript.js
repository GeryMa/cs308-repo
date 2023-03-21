const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 390;

let times = 0;
let y = 0;
let x = CANVAS_WIDTH;
let frameX = 3;
let frameY = 0;
let clock = 0;
let posX = 0;
let posY = 180;
let shadeFrameX = 0;
const shadeWidth = 71;
const shadeHeight = 172;
let shadeY = 40;
let floatUp = true;
const knight = new Image();
knight.src="char_black.png";
const bg = new Image();
bg.src="backgroundpsd.png";
const shade = new Image();
shade.src="shade.png";
const spriteWidth = 128;//575
const spriteHeight = 120;//523
const txt_Shade = new Image();
txt_Shade.src="textbox-shade.png";
const knight_txt = new Image();
knight_txt.src="knight-textbox.png";
const shade_dash = new Image();
shade_dash.src="shade_dash.png";
let sDashFrameX = 0;
let sDashWidth = 100;
let sDashHeight = 100;
let sDashXpos = 400;
const sly = new Image();
sly.src="sly.png";
const sly_txtBox = new Image();
sly_txtBox.src="textBox-Sly.png";
document.addEventListener("keydown", "keyDownHandler");
document.addEventListener("keyup", "keyUpHandler");
let leftKey, rightKey;
let charX = 0;

function keyDownHanlder(e){
    switch(e.keyCode){
        case 37: leftKey=true; break;
        case 39: rightKey=true; break;
    }
}
 
function keyUpHandler(e){
    switch(e.keyCode){
        case 37: leftKey=false; break;
        case 39: rightKey=false; break;
    }
}

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    //ctx.drawImage(knight, 50,50);
    //ctx.drawImage(dog, sx, sy,sw,sh,dx,dy,dh,dw);
    ctx.drawImage(bg,0,0);

    if(rightKey && charX<canvas.width-char.width){
        charX+=3;
    }
    else if(leftKey && charX>0){
        charX-=3;
    }
        ctx.drawImage(shade,charX,0);

    requestAnimationFrame(animate);
}
animate();