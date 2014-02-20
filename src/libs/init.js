$(document).ready(onReady)
function onReady()
{
	global.screen = new Screen(800, 600);
	
	global.stats = new Stats();
	document.body.appendChild( global.stats.domElement );
	global.stats.domElement.style.position = "absolute";
	global.stats.domElement.style.top = "0px";
	
	for (var i = 0; i < 1; i++) 
	{
		var guy = new Character(0, 0, 60, 60, "assets/characters/nifty/nifty.png");
	}

	resize();
	requestAnimFrame(update);
}