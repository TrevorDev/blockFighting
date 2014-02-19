$(document).ready(onReady)
function onReady()
{
	
	renderer = PIXI.autoDetectRenderer(800, 600);
	stage = new PIXI.Stage(0xFFFFFF);
	
	amount = (renderer instanceof PIXI.WebGLRenderer) ? 50 : 5;
	
	if(amount == 5)
	{
		renderer.context.mozImageSmoothingEnabled = false
		renderer.context.webkitImageSmoothingEnabled = false;
		
	}
	
	//renderer.view.style["transform"] = "translatez(0)";
	//alert(amount)
	document.body.appendChild(renderer.view);
	renderer.view.style.position = "absolute";
	stats = new Stats();
	
	
	document.body.appendChild( stats.domElement );
	stats.domElement.style.position = "absolute";
	stats.domElement.style.top = "0px";
	requestAnimFrame(update);
	
	wabbitTexture = new PIXI.Texture.fromImage("assets/characters/nifty/nifty.png")

	counter = document.createElement("div");
	counter.className = "counter";
	document.body.appendChild( counter);
	
	count = startBunnyCount;
	counter.innerHTML = count + " BUNNIES";
	
	
//	container = new PIXI.DisplayObjectContainer();
	container = new PIXI.SpriteBatch();
	stage.addChild(container);
	
	for (var i = 0; i < startBunnyCount; i++) 
	{
		var bunny = new PIXI.Sprite(wabbitTexture);
		bunny.speedX = Math.random() * 10;
		bunny.speedY = (Math.random() * 10) - 5;
		
		bunny.anchor.x = 0.5;
		bunny.anchor.y = 1;
		bunnys.push(bunny);
		
		container.addChild(bunny);
	}
	
	
	$(renderer.view).mousedown(function(){
		isAdding = true;
	});
	
	$(renderer.view).mouseup(function(){
		isAdding = false;
	})
	
	document.addEventListener("touchstart", onTouchStart, true);
	document.addEventListener("touchend", onTouchEnd, true);
	
	renderer.view.touchstart = function(){
		
		isAdding = true;
	}
	
	renderer.view.touchend = function(){
		isAdding = false;
	}
	resize();
}