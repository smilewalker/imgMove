
// var canvas = document.getElementById('img-target');
// var ctx = canvas.getContext('2d');
// var _width = canvas.width,
// 	_height = canvas.height;
// ctx.fillStyle = "rgb(200,0,0)";
// ctx.fillRect (0, 0, _width, _height);

// canvas.addEventListener('dragstart', function() {
// 	console.log('2');
// });


// var painter = new ImgMove({
// 	layer: 'img-target',
// 	layerBg: "rgba(200, 0, 0, 0.8)",
// 	cvaWidth: 50,
// 	cvaHeight: 50
// });

// var $wrap = document.getElementById('wrap');
// console.log($wrap.getBoundingClientRect())
// console.log($wrap.offsetLeft)
// console.log($('#wrap').offset());
// console.log(window.pageXOffset)
// $wrap.addEventListener("dragend", function(){
// 	alert('dd')
// });

var $canvas = document.getElementById('img-target');
var ctx = $canvas.getContext('2d');
var _width = $canvas.width,
	_height = $canvas.height;
ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect (0, 0, _width, _height);
$canvas.addEventListener('touchstart', function(e) {
	var _touches = e.touches[0];
	console.log(1)
	// var _x = 
	// console.log(_touches.clientX)
	// $canvas.translate(0,0)
});
$canvas.addEventListener('touchmove', function(e) {
	var _touches = e.touches[0];
	console.log(_touches.clientX)
	ctx.translate(_touches.clientX, _touches.clientY)
	// this.
	// var _x = 
	// console.log(_touches.clientX)
	// $canvas.translate(0,0)
});
