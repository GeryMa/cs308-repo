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

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    //ctx.drawImage(knight, 50,50);
    //ctx.drawImage(dog, sx, sy,sw,sh,dx,dy,dh,dw);
    ctx.drawImage(bg,0,0);


    if(clock <=1500){
        ctx.drawImage(shade, shadeFrameX * shadeWidth, 0 * shadeHeight, 71, 173, 400,shadeY, 41,73);
    }
    if(clock <= 540 /*|| clock >= 1500*/){
        ctx.drawImage(knight, frameX*spriteWidth, frameY * spriteHeight,spriteWidth,spriteHeight,posX,posY, 90,65);
    }
    if(clock > 540 && clock <2000){
        ctx.drawImage(knight, frameX * 0 *spriteWidth, frameY * spriteHeight,spriteWidth,spriteHeight,posX,posY, 90,65);
    }
    if(clock >= 550 && clock < 900){
        ctx.drawImage(txt_Shade, 200,230, 400,150);
        ctx.beginPath();
            ctx.font="13px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("I am surprised you have made it this far vessel", 220, 280);
            ctx.fillText("But you have yet to begin to understand ", 220, 300);
            ctx.fillText("what you are capable of", 220, 315)
        ctx.closePath();
    }
    if(clock>= 900 && clock < 1200){
        ctx.drawImage(knight_txt, 10,230,400,150);
        ctx.beginPath();
            ctx.fillStyle="white";
            ctx.fillText("Who are you and what do you mean?", 150, 280);
        ctx.closePath();
    }
    if(clock >= 1200 & clock < 1500){
        ctx.drawImage(txt_Shade, 200,230,400,150);
        ctx.font="13px Arial";
        ctx.fillStyle="white";
        ctx.fillText("I am what you have lost vessel.", 220,280);
        ctx.fillText("If you can catch me I will show you what I mean.", 220, 300);
    }
    if(clock >= 1500 && clock < 1700){
        ctx.drawImage(shade_dash, sDashFrameX* sDashWidth,0,100,100, sDashXpos,shadeY,100,100);
    }
    if(clock >= 1700 && clock < 2000){
        ctx.drawImage(knight_txt, 10,230,400,150);
        ctx.beginPath();
            ctx.font="13px Arial";
            ctx.fillStyle="whtie";
            ctx.fillText("Who was that? I am going to chase after him", 150,280);
        ctx.closePath();
    }
    if(clock >=2000 && clock < 3150){
        ctx.drawImage(knight, frameX*spriteWidth, frameY * spriteHeight,spriteWidth,spriteHeight,posX,posY, 90,65);
    }
    if(clock >=3150 && clock < 3550){
        ctx.drawImage(knight, frameX * 0 *spriteWidth, frameY * spriteHeight,spriteWidth,spriteHeight,posX,posY, 90,65);
    }
    if(clock >=3550){
        ctx.drawImage(knight, frameX*spriteWidth, frameY * spriteHeight,spriteWidth,spriteHeight,posX,posY, 90,65);
    }
    if(clock >= 2400 && clock < 2620){
        ctx.beginPath();
            ctx.fillStyle="black";
            ctx.fillRect(0,0, 600,390);
            ctx.fillStyle="White";
            ctx.font="50px Arial";
            ctx.fillText("5 Minutes later", 150, 200);
        ctx.closePath();
    }
    if(clock >= 2620){
        ctx.drawImage(sly, 350,50, 80,90);
    }
    if(clock >= 3150 && clock < 3350){
        ctx.drawImage(sly_txtBox, 200,230, 400,150);
        ctx.beginPath();
            ctx.fillStyle="White";
            ctx.font="13px Arial";
            ctx.fillText("Hello young one.",220,280);
            ctx.fillText("You must be after that old shade of yours", 220,300);
            ctx.fillText("He went that way. Best of luck!", 220,320);
        ctx.closePath();
    }
    if(clock >= 3350 && clock <3550){
        ctx.drawImage(knight_txt, 10,230,400,150);
        ctx.beginPath();
            ctx.font="13px Arial";
            ctx.fillStyle="whtie";
            ctx.fillText("Thank you wise man", 150,280);
        ctx.closePath();
    }
    if(clock >=3800){
        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.fillRect(0,0, 600,390);
        ctx.fillStyle="White";
        ctx.font="50px Arial";
        ctx.fillText("The End", 200, 200);
        ctx.closePath();
    }

    //shade float up & down animation
    if(clock % 16 == 0){
        if(floatUp){
            shadeY+=4;
            floatUp = false;
            shadeFrameX++;
        }else{
            shadeY-=4;
            floatUp = true;
            shadeFrameX++;
        }
        if(shadeFrameX > 1 ){
            shadeFrameX = 0;
        }
    }
    //main sprite walking and jumping
        if(clock % 4 ==0){
            if(clock < 300){
                posX+=2;
            }
        if(clock >= 300 && clock < 350){
                posX+=2;
                posY-=10;
            }
            if(clock >=350 && clock < 360){
                posX+=2;
                posY+=10;
            }
            if(clock >=360 && clock < 540){
                posX+=2;
            }
            if(clock >=2000 && clock < 2120){
                posX+=2;
            }
            if(clock >= 2120 && clock < 2160){
                posX+=2;
                posY-=5;
            }
            if(clock >=2160 && clock < 2225){
                posY+=6;
                posX+=5;
            }
            if(clock >= 2225 && clock < 2400){
                posX+=5;
            }
            if(clock >=2620 && clock < 2920){
                posX+=2;
            }
            if(clock >=2920 && clock < 2950){
                posX+=2;
                posY-=17;
            }
            if(clock >= 2950 && clock < 2970){
                posY+=5;
                posX+=3;
            }
            if(clock >= 2970 && clock < 3150){
                posX+=2;
            }
            if(clock >= 3550 && clock < 3600){
                posX+=4;
            }
            if(clock >= 3600 && clock < 3630){
                posX+=4;
                posY-=10;
            }
            if(clock >= 3630 && clock < 3760){
                posX+=4;
                posY+=4;
            }
            if(clock >= 3760){
                posX+=4;
            }
        }
        if(clock % 5 ==0){
            frameX++;
        }
        if(frameX >= 9){
            frameX = 0;
        }
        if(clock % 3){
            if(clock >=1500){
                sDashFrameX++;
                sDashXpos+=20;
            }
        }
        if(sDashFrameX >= 4){
            sDashFrameX = 4;
        }
        if(clock == 2619){
            posX = 5;
            posY = 180;
        }
        clock++;

    requestAnimationFrame(animate);
}
animate();