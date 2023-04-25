class Wall{
    constructor(x,y,width,height,breakable){
        this.x = x;
        this.y =y;
        this.width = width;
        this.height = height;
        switch(breakable){
            case 1: this.breaks= true; break;
            case 2: this.breaks = false; break;
        }
    }
    draw(ctx){
        ctx.beginPath();
            if(this.breaks == true){
                ctx.fillStyle="gray";
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
            if(this.breaks == false){
                ctx.fillStyle = "black";
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        ctx.closePath();
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
}