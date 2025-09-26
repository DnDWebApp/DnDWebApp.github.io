createGrid();
dragElement(document.getElementById("tile"));


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(600, 800);
ctx.stroke();

function createGrid()
{
	var gridX = localStorage.getItem("gridX");
	var gridY = localStorage.getItem("gridY");
	var grid = document.getElementById("grid");
	var cont = 0;
	for(let i = 0; i < gridY; i++)
	{
		for(let j = 0; j < gridX; j++)
		{
			var emptyTile = document.createElement("img");
			emptyTile.style.width="100px";
			emptyTile.style.height="100px";
			emptyTile.src="src/emptyTile.png";
			emptyTile.id = "emptyTile" + cont;
			emptyTile.classList.add("emptyTile");
			grid.appendChild(emptyTile);
			cont++;
		}
		grid.appendChild(document.createElement("br"));
	}
}