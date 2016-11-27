var http = require('http');
var fs = require('fs');
var request = require('request');

http.createServer(function(req, res) {
	
	//1. 文件读写实现	
	/*fs.readFile('IMG_1850.jpg', function(err, data) {
		if (err) {
			res.end('file not exist!');
		}
		else {
			res.writeHeader(200, {'Context-Type': 'text/html'});
			res.end(data);
		}

	});*/

	//2. 用Stream更简单的实现
	//fs.createReadStream('IMG_1850.jpg').pipe(res);

	//3. 直接从其他网站读取
	request('http://www.imooc.com/static/img/common/logo.png').pipe(res);

})
.listen(1337);
