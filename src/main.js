$(window).resize(resize)

window.onorientationchange = resize;

var width = 960;
var height = 540;

var wabbitTexture;

var bunnys = [];
var gravity = 0.75//1.5 ;

var maxX = width;
var minX = 0;
var maxY = height;
var minY = 0;

var startBunnyCount =2// 10;
var isAdding = false;
var count = 0;
var container;

var amount = 100;

var canvas = document.createElement( 'canvas' ); 
canvas.width = this.width;
canvas.height = this.height;  

PIXI.Texture.fromCanvas = function(canvas)
{
	// give the canvas an id?
	var texture = PIXI.TextureCache[canvas];
	
	if(!texture)
	{
		var baseTexture = PIXI.BaseTextureCache[canvas];
		if(!baseTexture) baseTexture = new PIXI.BaseTexture(canvas);
		texture = new PIXI.Texture(baseTexture);
		PIXI.TextureCache[canvas] = texture;
	}
	
	return texture;
}



function onTouchStart(event)
{
	isAdding = true;
}

function onTouchEnd(event)
{
	isAdding = false;
}

function resize()
{

	var width = $(window).width(); 
	var height = $(window).height(); 
	
	if(width > 800)width  = 800;
	if(height > 600)height = 600;
	
	maxX = width;
	minX = 0;
	maxY = height;
	minY = 0;
	
	var w = $(window).width() / 2 - width/2;
	var h = $(window).height() / 2 - height/2;
	
	renderer.view.style.left = $(window).width() / 2 - width/2 + "px"
	renderer.view.style.top = $(window).height() / 2 - height/2 + "px"
	
	stats.domElement.style.left = w + "px";
	stats.domElement.style.top = h + "px";
	
	counter.style.left = w + "px";
	counter.style.top = h + 49 + "px";
	
	renderer.resize(width, height);
}

function update()
{
	stats.begin();
	if(isAdding)
	{
		// add 10 at a time :)
		
		for (var i = 0; i < amount; i++) 
		{
			var bunny = new PIXI.Sprite(wabbitTexture)//, {x:0, y:0, width:26, height:37});
			bunny.speedX = Math.random() * 10;
			bunny.speedY = (Math.random() * 10) - 5;
			bunny.anchor.y = 1;
			//bunny.alpha = 0.3 + Math.random() * 0.7;
			bunnys.push(bunny);
			bunny.scale.y = 1;
			container.addChild(bunny)//, random);
			
			count++;
		}
		
	
		counter.innerHTML = count + " BUNNIES";
	}
	
	for (var i = 0; i < bunnys.length; i++) 
	{
		var bunny = bunnys[i];
		
		bunny.position.x += bunny.speedX;
		bunny.position.y += bunny.speedY;
		//bunny.scale.x = 
		bunny.speedY += gravity;
	//	bunny.rotation += 0.1
		if (bunny.position.x > maxX)
		{
			bunny.speedX *= -1;
			bunny.position.x = maxX;
		}
		else if (bunny.position.x < minX)
		{
			bunny.speedX *= -1;
			bunny.position.x = minX;
		}
		
		if (bunny.position.y > maxY)
		{
			bunny.speedY *= -0.85;
			bunny.position.y = maxY;
			bunny.spin = (Math.random()-0.5) * 0.2
			if (Math.random() > 0.5)
			{
				bunny.speedY -= Math.random() * 6;
			}
		} 
		else if (bunny.position.y < minY)
		{
			bunny.speedY = 0;
			bunny.position.y = minY;
		}
		
	}

	renderer.render(stage);
	requestAnimFrame(update);
	stats.end();
}