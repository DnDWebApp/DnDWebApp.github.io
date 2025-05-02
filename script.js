
var newMenu = document.getElementById("newMenu");
var menu = document.getElementById("menu");
newMenu.style.display = "none";

function showNewMenu()
{
	newMenu.style.display = "flex";
	menu.style.display = "none";
}

function createCampaign()
{
	localStorage.setItem("name", document.getElementById("name").value);
	localStorage.setItem("gridX", document.getElementById("gridX").value);
	localStorage.setItem("gridY", document.getElementById("gridY").value);
	window.location.href = "./new";
}

function download(text, name, type) { //stole from reddit
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}