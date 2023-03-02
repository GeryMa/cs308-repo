const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const woman = new Image();
woman.src="woman.png";
let times = 0;
const man = new Image();
man.src="walkingMan.png";
let y = 0;
let x = CANVAS_WIDTH;
let clock = 0;
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(woman, x, 0);
    ctx.drawImage(man,y, 0, 67,128);
    if(x > CANVAS_WIDTH/2){
        x--;
    }else {
        if(y < CANVAS_WIDTH/2 - 70){
            y++;
        }
    }
    if(x <= CANVAS_WIDTH/2 & y >= CANVAS_WIDTH/2 -70){
        if(clock >= 540 && clock <= 660 ){
            speech();
        }else if(clock >= 660){
            speech2();
        }
        times++;
    }
    clock++;
    requestAnimationFrame(animate);
}
function speech(){
    ctx.font = "50px arial";
    ctx.fillText("hi", CANVAS_WIDTH/2 - 70,170);
}
function speech2(){
    ctx.fillText("hi", CANVAS_WIDTH/2 + 70,170)
}
animate();