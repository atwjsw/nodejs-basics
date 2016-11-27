var fs = require('fs');

//简单暴力，无法监听精细监控，大文件可能爆内存
var source = fs.readFileSync('./logo.png');
fs.writeFileSync('stream-copy-logo.png', source);