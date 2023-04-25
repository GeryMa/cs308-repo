class Player{
  constructor(x,y,speed=3){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 25;
    this.height = 25;
    
  }
  move(keys){
    if(keys.W && this.y > 10)  {
      this.y-=this.speed;
    }
    if(keys.A && this.x >= 10){
      this.x-=this.speed;
    }
    if(keys.S && this.y < canvas.height - this.height){
      this.y+=this.speed;
    }
    
    if(keys.D && this.x <= canvas.width  - this.width){
      this.x+=this.speed;
    }
  }
  draw(ctx){
    ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";
      ctx.fillRect(this.x, this.y, this.width, this.height);
      //ctx.fill();
    ctx.closePath();
  }
  getX(){
    return this.x;
  }
  undoMove(){
    this.x = canvas.width/2;
    this.y = canvas.width/2;
  }
}