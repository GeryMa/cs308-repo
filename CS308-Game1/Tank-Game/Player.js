class Player {
    constructor(x,y,speed, width = 30, height = 30, color, fuel = 100, shot = false, img, health){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.color = color;
        this.fuel = fuel;
        this.shot = false;
        this.health = health;
        this.img = img;
      }
    move(keys, walls) {
        this.dx = 0;
        this.dy = 0;
        if (keys.A && this.fuel > 0 && this.x > 0) {
            this.dx = -this.speed;
            this.fuel--;
            if (this.checkWallCollision(this, walls)) {
                this.dx = 0;
            }
        }
        if (keys.D && this.fuel > 0 && (this.x + this.width) < canvas.width) {
            this.dx = this.speed;
            this.fuel--;
            if (this.checkWallCollision(this, walls)) {
                this.dx = 0;
            }
        }
        if (keys.W && this.fuel > 0 && this.y > 0) {
            this.dy = -this.speed;
            this.fuel--;
            if (this.checkWallCollision(this, walls)) {
                this.dy = 0;
            }
        }
        if (keys.S && this.fuel > 0 && (this.height + this.y) < canvas.height) {
            this.dy = this.speed;
            this.fuel--;
            if (this.checkWallCollision(this, walls)) {
                this.dy = 0;
            }
        }

        this.x += this.dx;
        this.y += this.dy;
    }
    shoot(clickX, clickY, ctx){
        console.log("got to player.shoot");
        let shots = new Bullet(this.x, this.y, clickX, clickY);
        shots.draw(ctx);
        shots.updatePosition();
    }
    checkWallCollision(player, walls) {
        for (let i = 0; i < walls.length; i++) {
            if (player.x + player.dx < walls[i].x + walls[i].width &&
                player.x + player.dx + player.width > walls[i].x &&
                player.y + player.dy < walls[i].y + walls[i].height &&
                player.y + player.dy + player.height > walls[i].y) {
                return true;
            }
        }
        return false;
    }
    detectWallCollision(wall) {
        const playerLeft = this.x;
        const playerRight = this.x + this.width;
        const playerTop = this.y;
        const playerBottom = this.y + this.height;
        
        const wallLeft = wall.x;
        const wallRight = wall.x + wall.width;
        const wallTop = wall.y;
        const wallBottom = wall.y + wall.height;
        
        const hasCollidedFromLeft = playerRight >= wallLeft && playerLeft < wallLeft;
        const hasCollidedFromRight = playerLeft <= wallRight && playerRight > wallRight;
        const hasCollidedFromTop = playerBottom >= wallTop && playerTop < wallTop;
        const hasCollidedFromBottom = playerTop <= wallBottom && playerBottom > wallBottom;
        
        if (hasCollidedFromLeft) {
          return "left";
        }
        
        if (hasCollidedFromRight) {
          return "right";
        }
        
        if (hasCollidedFromTop) {
          return "top";
        }
        
        if (hasCollidedFromBottom) {
          return "bottom";
        }
        
        return null;
      }
    draw(ctx) {
      /*ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.closePath();*/
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    
    collidesWith(wall) {
        const playerLeft = this.x;
        const playerRight = this.x + this.width;
        const playerTop = this.y;
        const playerBottom = this.y + this.height;
      
        const wallLeft = wall.x;
        const wallRight = wall.x + wall.width;
        const wallTop = wall.y;
        const wallBottom = wall.y + wall.height;
      
        return playerLeft < wallRight &&
               playerRight > wallLeft &&
               playerTop < wallBottom &&
               playerBottom > wallTop;
      }
    getBoundingBox() {
        return {
          left: this.x - 1,
          right: this.y + this.width + 1,
          top: this.y + 1,
          bottom: this.y + this.height - 1
        };
    }
    getX(){
        return this.x;
    }
    getFuel(){
        return this.fuel;
    }
  }