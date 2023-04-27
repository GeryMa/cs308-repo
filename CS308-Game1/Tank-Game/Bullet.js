class Bullet{
    constructor(x, y, targetX, targetY){
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.speed = 3;
        this.width = 10;
        this.height = 10;

        var directionX = this.targetX - this.x;
        var directionY = this.targetY - this.y;

        var magnitude = Math.sqrt(directionX * directionX + directionY * directionY);
        directionX /= magnitude;
        directionY /= magnitude;

        this.velocityX = directionX * this.speed;
        this.velocityY = directionY * this.speed;
        this.ranColor = Math.floor(Math.random() * 7) + 1;
    }
    updatePosition(){
        //console.log(this.velocityX);
        this.x += this.velocityX;
        //console.log(this.velocityY);
        this.y += this.velocityY;
        //console.log("got to updatePosition for the bullets");
    }
    draw(ctx){
        //console.log("got to bullet.js draw function");
        ctx.beginPath();
            ctx.fillStyle = "yellow";
            ctx.fillRect(this.x, this.y, this.width, this.height);
            //ctx.fill();
        ctx.closePath();
    }
}