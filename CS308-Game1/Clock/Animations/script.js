const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


let woman = new Image();
woman.src='C:\\Users\\Dr3am\\VsCode projects\\CS308-Repo\\cs308-repo\\CS308-Game1\\Clock\\Animations\\woman.png';
woman.onload = loadImages();

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);

    ctx.drawImage(woman, 0,0, woman.width, woman.height);
}

let numOfImages = 1;
function loadImages(){
    if(--numOfImages > 0) return;
    animate();
}