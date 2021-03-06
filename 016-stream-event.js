var fs = require('fs');

var readStream = fs.createReadStream('015-stream-copy.js');

readStream
	.on('data', function(chunk) {
		console.log('data emits');
		console.log(Buffer.isBuffer(chunk));
		console.log(chunk.toString('utf8'));
	})
	.on('readable', function(){
		console.log('data readable');
	})
	.on('end', function(){
		console.log('data ends');
	})
	.on('close', function() {
		console.log('data close');
	})
	.on('error', function(e) {
		console.log('data error ' + e);
	});