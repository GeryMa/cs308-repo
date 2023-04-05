class SpritePlayer{
	constructor(x, y=200, speed=1, image, frameWidth, frameHeight, numCells){
		this.x=x?x:0;   //ternary  condition?true action:false action
		this.y=y;
		this.speed=speed;
		this.image=image;
		this.frameW=frameWidth;
		this.frameH=frameHeight;
		this.frameX=0;
		this.frameY=0;
		this.numCells=numCells;
		
	}
	
	move(canvas, keys, timing){
		if(keys.right && this.x<canvas.width-this.frameW){
			this.frameY=0;
			this.x+=2;
		}
			
		if(keys.left && this.x>0){
			this.frameY=1;
			this.x-=2;
		}
		if(keys.left || keys.right){
			if(timing%3==0){
				this.frameX++;
				if(this.frameX==this.numCells) this.frameX=0;
			}
		}
		
	}
	
	draw(ctx){
		ctx.beginPath();
			ctx.drawImage(this.image, this.frameX*this.frameW, this.frameY*this.frameH, this.frameW, this.frameH, this.x, this.y, this.frameW, this.frameH);
		ctx.closePath();
	}
	
}