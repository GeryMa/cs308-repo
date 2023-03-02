const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

let times = 0;
let y = 0;
let x = CANVAS_WIDTH;
let frameX = 0;
let frameY = 3;
let clock = 0;
let posX = 0;
const dog = new Image();
dog.src="shadow_dog.png";
const bg = new Image();
bg.src="bg.jpg";
const spriteWidth = 575;//575
const spriteHeight = 523;//523

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(bg, 0,0, 600, 200);
    //ctx.drawImage(dog, sx, sy,sw,sh,dx,dy,dh,dw);
    if(clock <240){
        ctx.drawImage(dog, frameX*spriteWidth, frameY * spriteHeight,spriteWidth,spriteHeight,posX,90, 90,65);
    }
    if (clock >=240 && clock < 360){
        ctx.drawImage(dog, 0*spriteWidth, 0 * spriteHeight, spriteWidth, spriteHeight,posX, 90,90,65);
        ctx.beginPath();
        ctx.font = "40px arial"; 
        ctx.fillText("woof", posX, 70);
        ctx.closePath();
    }
    if(clock >= 360){
        ctx.drawImage(dog, frameX*spriteWidth, frameY * spriteHeight,spriteWidth,spriteHeight,posX,90, 90,65);
    }
    //ctx.fillRect(100,50,100,100);
    clock++;
        if(clock % 2 ==0){
            if(clock < 240 || clock >=360){
                posX+=2;
            }
        }
        if(clock % 3 ==0){
            
            frameX++;
        }
        if(frameX >= 9){
            frameX = 0;
        }
    requestAnimationFrame(animate);
}
animate();