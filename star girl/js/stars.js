var starObj = function() {
	this.x;
	this.y;
}

starObj.prototype.init = function() {
	this.x = Math.random() * 600 + 100 ;
	this.y = Math.random() * 300 + 150 ;
}

starObj.prototype.draw = function() {
	cxt.drawImage(starPic, 0, 0, 7, 7, this.x, this.y, 7, 7);
}

function drawStars() {
	for(var i = 0; i < num; i++) {
		stars[i].draw();
	}
}