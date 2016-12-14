var ImgMove = function(info) {
	this.info = info; 
	this.init();
};

ImgMove.prototype = {

	initData: function() {
		this.lastX = 0;
		this.lastY = 0;
		this.isPaint = false;
	},

	setConfig: function() {
		this.config = {
			boardW: this.info.cvaWidth || 600,
			boardH: this.info.cvaHeight || 400,
			layerBg: this.info.layerBg || "rgba(255, 255, 255, 0.8)"
		};
	},

	setWH: function() {
		this.cva.setAttribute('width', this.config.boardW);
		this.cva.setAttribute('height', this.config.boardH);
	},

	setLayer: function() {
		this.ctx.fillStyle = this.config.layerBg;
		this.ctx.fillRect(0, 0, this.config.boardW, this.config.boardH);
		// this.ctx.globalCompositeOperation = "destination-out";
	},



	// 画图事件
	draw: function(x, y) {
	    // if(this.isPaint) {

	    // }
	    // this.lastX = x; 
	    // this.lastY = y;
	    console.log(x, y)

	},

	touchF: function(event) {
		event.preventDefault();
		var point = event.changedTouches[0];
		switch(event.type) {
			case 'touchstart':
				// if(this.count == 0) {
				// 	this.historyLog();
				// }
				this.draw(point.clientX - this.cva.offsetLeft, point.clientY - this.cva.offsetTop);
				// this.ctx.save();
				// this.isPaint = true;
				break;
			case 'touchmove':
				// if(this.isPaint) {
					this.draw(point.pageX - this.cva.offsetLeft, point.pageY - this.cva.offsetTop);
				// }
				break;
			case 'touchend':
				// this.ctx.restore();
				// if(this.isPaint) {
				// 	this.historyLog();
				// }
	   //  		this.isPaint = false;
	    		break;
	    	default:
	    		// this.isPaint = false;
	    		break;
		}
	},


	bind: function(obj, handler) {
		return function() {
			return handler.apply(obj, arguments);
		};
	},
	
	init: function() {
		this.cva = document.getElementById(this.info.layer);
		this.ctx = this.cva.getContext('2d');

		this.initData();
		this.setConfig();
		this.setWH();
		this.setLayer();

		this.cva.addEventListener('touchstart', this.touchF.bind(this), false);
		this.cva.addEventListener('touchmove', this.touchF.bind(this), false);
		this.cva.addEventListener('touchend', this.touchF.bind(this), false);
	}
};
