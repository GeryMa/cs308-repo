class Enemy{
    constructor(x, y, targetX, targetY, speed, width = 20, height = 20){
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.speed = speed;
        this.timeStep = 0.1;
        //this.velocityX = 0;
        //this.velocityY = 0;
        this.width = width;
        this.height = height;

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
    }
    draw(ctx){
        ctx.beginPath();
            switch(this.ranColor){
                case 1: ctx.fillStyle = "#FF5F1F"; break; //orange
                case 2: ctx.fillStyle = "#fc0303"; break; //red
                case 3: ctx.fillStyle = "#FFEA00"; break; //yellow
                case 4: ctx.fillStyle = "#32CD32"; break; //green
                case 5: ctx.fillStyle = "cyan"; break;
                case 6: ctx.fillStyle = "#7F00FF"; break; //purple
                case 7: ctx.fillStyle = "#FF00FF"; break; //pink
            }
            ctx.fillRect(this.x, this.y, this.width, this.height);
            //ctx.fill();
        ctx.closePath();
    }
    reverseDirection(){
        this.velocityX = this.velocityX * -1;
        this.velocityY = this.velocityY * -1;
    }
    getX(){
        return this.x;
    }
 }