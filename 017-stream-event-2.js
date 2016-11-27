var fs = require('fs');

var readStream = fs.createReadStream('IMG_1850.jpg');
var n = 0;

readStream
	.on('data', function(chunk) {
		n++;
		console.log('data emits');
		console.log(Buffer.isBuffer(chunk));
		//console.log(chunk.toString('utf8'));
		
		//模拟读过程的异步情况
		readStream.pause();
		console.log('data pause');
		setTimeout(function() {
			console.log('data resume');
			readStream.resume();
		}, 1000);
	})
	.on('readable', function(){
		console.log('data readable');
	})
	.on('end', function(){
		console.log(n);
		console.log('data ends');
	})
	.on('close', function() {
		console.log('data close');
	})
	.on('error', function(e) {
		console.log('data error ' + e);
	});