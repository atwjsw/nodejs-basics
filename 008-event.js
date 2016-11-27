var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

life.setMaxListeners(12);

life.on('求安慰', water);

function water (who) {
	console.log('给 ' + who + ' 倒水');
}

life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 揉肩');
});

life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 做饭');
});

life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 洗衣');
});

life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 。。。5');
});

life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 。。。6');
});

life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 。。。7');
});

life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 。。。8');
});

life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 。。。9');
});

life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 。。。10');
});

//超出10个事件监听器会抛异常
life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 。。。11');
});

life.on('求安慰', function(who) {
	console.log('给 ' + who + ' 你想累死我啊');
});

life.on('求溺爱', function(who) {
	console.log('给 ' + who + ' 买衣服');
});

life.on('求溺爱', function(who) {
	console.log('给 ' + who + ' 交工资');
});

//life.emit('求安慰', '汉子');

//life.emit('求溺爱', '妹子');

//这样没用，匿名函数不行，必须用命名函数
life.removeListener('求安慰', function(who) {
	console.log('给 ' + who + ' 你想累死我啊');
});

//这样才行
life.removeListener('求安慰', water);

//移除全部
//life.removeAllListeners();

//移除全部
life.removeAllListeners('求安慰');

//是否有相应的listener
var hasComfortListener = life.emit('求安慰', '汉子');
var hasLoveListener = life.emit('求溺爱', '妹子');
//var hasPlayListener = life.emit('求玩坏', '汉子和妹子');

console.log(hasComfortListener);
console.log(hasLoveListener);
//console.log(hasPlayListener);

console.log(life.listeners('求安慰').length);
console.log(EventEmitter.listenerCount(life, '求安慰'));

