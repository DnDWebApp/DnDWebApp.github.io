createGrid();
dragElement(document.getElementById("tile"));




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
			emptyTile.style.padding="0";
			emptyTile.style.margin="0";
			emptyTile.src="src/emptyTile.png";
			emptyTile.id = "emptyTile" + cont;
			emptyTile.classList.add("emptyTile");
			cont++;
			grid.appendChild(emptyTile);
		}
		grid.appendChild(document.createElement("br"));
	}
}







function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}