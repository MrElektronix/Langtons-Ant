var canvas;
var keyboard;
var grid;
var ant;
var MoveAnt;

function Init(){
	canvas = new Canvas(800, 600, "canvas");
	keyboard = new Input();
	grid = new Grid(40, 30, 20, 20);
	ant = new Ant(20, 20, grid);
	
	Update();
	MoveAnt = setInterval(function(){
		ant.x += ant.width;
	}, 500);
	
}

function Update(){
	requestAnimationFrame(Update);
	canvas.clear();
	grid.Draw(canvas.context);
	ant.Draw(canvas.context);
	OutOfBounds();
}

function OutOfBounds(){
	if (ant.x >= (grid.rows * grid.tilewidth) - ant.width){
		clearInterval(MoveAnt);
	}
}

Init();