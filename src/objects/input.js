var listener = new window.keypress.Listener();
var controllers = []

var Controller = function(keys){
	keyMap = {}
	for(var i in keys){
		keyMap[i] = [keys[i], false]
	}

	this.keys = keyMap;
	this.keyUp = function(key){
		this.keys[key][1]=false;
	};
	this.keyDown = function(key){
		this.keys[key][1]=true;
	};
	this.getKey = function(key){
		return this.keys[key][1];
	}
}

var controllerA = new Controller({ 
	left: "left",
	right: "right",
	up: "up",
	down: "down",
	attack: "m",
	juggle: "n"
});
//var controllerB = new Controller({ left: ["s", false] });

controllers.push(controllerA)
//controllers.push(controllerB)

for (var i in controllers){
	controller = controllers[i]
	for (var key in controller.keys) {
	  listener.register_combo({
	    keys              : controller.keys[key][0],
	    on_keydown        : controller.keyDown.bind(controller, [key]),
	    on_keyup          : controller.keyUp.bind(controller, [key]),
	    prevent_repeat    : true
		});
	}
}
