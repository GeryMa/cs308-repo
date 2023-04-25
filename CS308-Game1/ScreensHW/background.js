class Background{
	constructor(img, x, y, width, height, speed, dir){
		this.img=img;
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;
		this.speed=speed;
		this.dir=dir;
		
	}
	
	move(keys){

		if(keys.right)
			this.dir=-1;
		if(keys.left)
			this.dir=1;
		
		if(keys.right && this.x<=-this.width){
			this.x=this.width;
		}
		
		if(keys.left  && this.x>=this.width){
			this.x=-this.width;
		}
		
	
		
		
		if(keys.right || keys.left)
			this.x+=this.dir*this.speed;
			
		
		
		
	}
	
	draw(ctx){
		ctx.beginPath();
			ctx.drawImage(this.img, this.x, this.y);
		ctx.closePath();
	}
	
}