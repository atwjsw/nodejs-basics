var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
    content: 'test comment from atwjsw again',
    'mid': 8837
});

var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.8',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=6ca7daff-9098-4151-befc-823f480f76cd; imooc_isnew_ct=1465280747; bdshare_firstime=1475826563758; loginstate=1; apsid=djNTZmYmQ2M2ZmNzgzMGU5MThkN2M1NzcwY2E3NGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzQ0MTY5MwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADczODc2NTYzMDJmZWY3M2EwOTQ0ODAzMzkxMDZkN2QxPjsdWD47HVg%3DNj; Hm_lvt_c1c5f01e0fc4d75fd5cbb16f2e713d56=1478781212,1478850659,1478968347,1479053101; PHPSESSID=a6oevmgicner68dbd8ujh1c2b1; jwplayer.qualityLabel=é«æ¸; jwplayer.volume=96; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1479577386,1479664986,1479804701,1479821202; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1479885193; imooc_isnew=2; cvde=58344790317cc-95',
        'Host': 'www.imooc.com',
        'Origin': 'http://www.imooc.com',
        'Referer': 'http://www.imooc.com/video/8837',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
};

var req =  http.request(options, function(res) {
	console.log('Status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers));

	res.on('data', function(chunk) {
		console.log('响应数据！' + chunk);
	});

	res.on('end', function() {
		console.log('评论完毕！');
	});
});

req.on('error', function(e) {
	console.log('Error: ' + e.message);
});

req.write(postData);
req.end();