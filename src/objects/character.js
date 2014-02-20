function Character(x, y, width, height, spritePath){
	this.setPos = function(x,y){
		this.x = x;
		this.y = y;
		this.sprite.x = x;
		this.sprite.y = y;
	}
	this.setDim = function(x,y){
		this.width = x;
		this.height = y;
		this.sprite.width = x;
		this.sprite.height = y;
	}
	this.move = function(){
		this.x+=this.xSpd;
		this.y+=this.ySpd;
		this.setPos(this.x, this.y)
	}
	
	this.texture = new PIXI.Texture.fromImage(spritePath);
	this.sprite = new PIXI.Sprite(this.texture);
	global.screen.container.addChild(this.sprite)
	this.xSpd = 0;
	this.ySpd = 0;
	this.x = x;
	this.y = y;
	this.width;
	this.height;
	this.setDim(width,height);
	Character.array.push(this)
	
}

Character.array = []