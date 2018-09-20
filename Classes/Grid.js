class Grid {
	constructor(rows, columns, tilewidth, tileheight){
		this.rows = rows;
		this.columns = columns;
		this.tilewidth = tilewidth;
		this.tileheight = tileheight;
		this.tileX;
		this.tileY;
		this.tiles = [];
		
		this.Start();
	}
	
	Start(){
		for (var i = 0; i < this.rows; i++){
			this.tiles[i] = [];
			for (var j = 0; j < this.columns; j++){
				this.tileX = i * this.tilewidth;
				this.tileY = j * this.tileheight;
				
				this.tiles[i][j] = new Rectangle(this.tileX, this.tileY, this.tilewidth, this.tileheight);
			}
		}
	}
	
	Draw(context){
		for (var i = 0; i < this.tiles.length; i++){
			for (var j = 0; j < this.tiles[i].length; j++){
				this.tiles[i][j].Draw(context);
			}
		}
	}
	
}