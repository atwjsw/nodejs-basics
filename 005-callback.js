//需按顺序执行异步逻辑时，一般采用“后续传递”的方式，即将后续逻辑封装在回调函数中作为起始函数的参数，逐层嵌套，
//达到按顺序执行的效果

function learn(something) {
	console.log(something);
}

function we(callback, something) {
	something += ' is cool';
	callback(something);
}

we(learn, "nodejs");

we(function(something) {
	console.log(something);
}, 'jade');