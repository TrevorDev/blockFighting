$(document).ready(onReady)
function onReady()
{
	global.screen = new Screen(800, 600);
	
	global.stats = new Stats();
	document.body.appendChild( global.stats.domElement );
	global.stats.domElement.style.position = "absolute";
	global.stats.domElement.style.top = "0px";
	
	var controllerA = new Controller({ 
		left: "left",
		right: "right",
		up: "up",
		down: "down",
		attack: "m",
		juggle: "n"
	});

	var controllerB = new Controller({ 
		left: "a",
		right: "d",
		up: "w",
		down: "s",
		attack: "r",
		juggle: "t"
	});
	new Character(config.width/2+200, 0, 40, 40, "assets/characters/nifty/nifty.png", controllerA);
	new Character(config.width/2-200, 0, 40, 40, "assets/characters/nifty/nifty.png", controllerB);
	var ground = new Wall(config.width/2 - 500/2, config.height*3/4, 500, 30, "assets/walls/finalDestination/wall.png");
	global.currentLevel = new Level([ground]);

	resize();
	requestAnimFrame(update);
}