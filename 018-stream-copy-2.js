//防爆仓的数据读写
var fs = require('fs');

var readStream = fs.createReadStream('IMG_1850.jpg');
var writeStream = fs.createWriteStream('stream.jpg');

readStream.on('data', function(chunk) {
	if (writeStream.write(chunk) === false) {
		console.log('still caching');
		readStream.pause();
	}
});

readStream.on('end', function(){
	writeStream.end();
});

writeStream.on('drain', function() {
	console.log('data drains');
	readStream.resume();
});
