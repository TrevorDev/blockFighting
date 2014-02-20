function Wall(x, y, width, height, spritePath){
	this.texture = new PIXI.Texture.fromImage(spritePath);
	this.sprite = new PIXI.Sprite(this.texture);
	global.screen.container.addChild(this.sprite)
	this.x = 0;
	this.y = 0;
	Wall.array.push(this)
	this.setPos = function(x,y){
		this.x = x;
		this.y = y;
		this.sprite.x = x;
		this.sprite.y = y;
	}
}

Wall.array = []