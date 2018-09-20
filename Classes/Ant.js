class Ant {
	constructor(x, y, grid){
		this.x = x;
		this.y = y;
		this.grid = grid;
		this.width = grid.tilewidth;
		this.height = grid.tileheight;
		
		this.antObject;
		this.visited = [];
		
	}
	
	Draw(context){
		for (var i = 0; i < this.grid.tiles.length; i++){
			for (var j = 0; j < this.grid.tiles[i].length; j++){
				
				if (this.x == this.grid.tiles[i][j].x && this.y == this.grid.tiles[i][j].y){
					this.antObject = new Rectangle(this.x, this.y, this.width, this.height, "white");
					this.antObject.Draw(context);
					
					if (this.grid.tiles[i][j].color == "black"){
						this.grid.tiles[i][j].color = "red";
					}
				}
			}
		}
	}

	
	Langtons(oldColor, newColor){
		
	}
	
}