class Rectangle extends Object{
	constructor(x, y, width, height, color){
		super(x, y, width, height);
		this.color = color || "black";
	}
	
	Draw(context) {
		//context.fillStyle = this.color;
		//context.fillRect(this.x, this.y, this.width, this.height);
		
		
		context.beginPath();
		context.rect(this.x, this.y, this.width, this.height);
		context.fillStyle = this.color;
		context.fill();
		context.lineWidth = 0.5;
		context.strokeStyle = "white";
		context.stroke();
		context.closePath();
	
	}
}